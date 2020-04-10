const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

// Reach Sequelize models
const UserPrestation = require("../sequelize/models/user_prestation");
const Prestation = require("../sequelize/models/prestation");
const Contract = require("../sequelize/models/contract");
const User = require("../sequelize/models/user");
const Capacity = require("../sequelize/models/capacity");
const Role = require("../sequelize/models/role");

// Get all users_prestations
router.get("/", (req, res) => {
    UserPrestation.findAll({
        include: [
            { model: User, include: [Capacity, Role] },
            { model: Prestation, include: Contract },
        ],
    })
        .then((usersPrestations) => res.status(200).json(usersPrestations))
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

// Get one user_prestation
router.get("/:UserUuid/:PrestationId", (req, res) => {
    const UserUuid = req.params.UserUuid;
    const PrestationId = req.params.PrestationId;
    UserPrestation.findOne({
        where: {
            UserUuid: UserUuid,
            PrestationId: PrestationId,
        },
        include: [
            { model: User, include: [Capacity, Role] },
            { model: Prestation, include: Contract },
        ],
    })
        .then((resultUserPrestation) =>
            res.status(200).json(resultUserPrestation)
        )
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

// Post a user_prestation
router.post("/", (req, res) => {
    const UserUuid = req.body.UserUuid;
    const PrestationId = req.body.PrestationId;
    const presence = req.body.presence;
    const car = req.body.car;
    const user_prestation = {
        UserUuid,
        PrestationId,
        presence,
        car,
    };
    UserPrestation.create(user_prestation)
        .then((resultUserPrestation) =>
            res.status(200).json(resultUserPrestation)
        )
        .catch((err) => {
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

// Put a user_prestation
router.put("/:UserUuid/:PrestationId", (req, res) => {
    const UserUuid = req.params.UserUuid;
    const PrestationId = req.params.PrestationId;
    const presence = req.body.presence;
    const car = req.body.car;
    const user_prestation = {
        UserUuid,
        PrestationId,
        presence,
        car,
    };
    UserPrestation.update(user_prestation, {
        where: {
            UserUuid: UserUuid,
            PrestationId: PrestationId,
        },
        include: [
            { model: User, include: [Capacity, Role] },
            { model: Prestation, include: Contract },
        ],
    })
        .then((resultUserPrestation) =>
            res.status(200).json(resultUserPrestation)
        )
        .catch((err) => {
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

// Delete a user_prestation
router.delete("/:UserUuid/:PrestationId", (req, res) => {
    const UserUuid = req.params.UserUuid;
    const PrestationId = req.params.PrestationId;
    UserPrestation.destroy({
        where: {
            UserUuid: UserUuid,
            PrestationId: PrestationId,
        },
    })
        .then((resultUserPrestation) =>
            res.status(200).json(resultUserPrestation)
        )
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

module.exports = router;
