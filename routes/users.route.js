const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

// Reach Sequelize models
const User = require("../sequelize/models/user");
const Capacity = require("../sequelize/models/capacity");
const Role = require("../sequelize/models/role");

// Get all users
router.get("/", (req, res) => {
    User.findAll({ include: [{ model: Capacity }, { model: Role }] })
        .then((users) => res.status(200).json(users))
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

// Get one user
router.get("/:uuid", (req, res) => {
    const uuid = req.params.uuid;
    User.findOne({
        where: {
            uuid: uuid,
        },
        include: [{ model: Capacity }, { model: Role }],
    })
        .then((resultUser) => res.status(200).json(resultUser))
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

// Post a user
router.post("/", (req, res) => {
    const name = req.body.name;
    const firstname = req.body.firstname;
    const pseudo = `${firstname.toLowerCase()}_${name.toLowerCase()}`;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    const eMail = req.body.eMail;
    const funcAdmin = req.body.funcAdmin;
    const capacityId = req.body.capacityId;
    const roleId = req.body.roleId;
    const user = {
        name,
        firstname,
        pseudo,
        address,
        phoneNumber,
        eMail,
        funcAdmin,
        capacityId,
        roleId,
    };
    User.create(user)
        .then((resultUser) => res.status(200).json(resultUser))
        .catch((err) => {
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

// Put a user
router.put("/:uuid", (req, res) => {
    const uuid = req.params.uuid;
    const name = req.body.name;
    const pseudo = `${firstname.toLowerCase()}_${name.toLowerCase()}`;
    const firstname = req.body.firstname;
    const password = req.body.password;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    const eMail = req.body.eMail;
    const funcAdmin = req.body.funcAdmin;
    const capacityId = req.body.capacityId;
    const roleId = req.body.roleId;
    const user = {
        name,
        firstname,
        pseudo,
        password,
        address,
        phoneNumber,
        eMail,
        funcAdmin,
        capacityId,
        roleId,
    };
    User.update(user, {
        where: {
            uuid: uuid,
        },
    })
        .then((resultUser) => res.status(200).json(resultUser))
        .catch((err) => {
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

// Delete a user
router.delete("/:uuid", (req, res) => {
    const uuid = req.params.uuid;
    User.destroy({
        where: {
            uuid: uuid,
        },
    })
        .then((resultUser) => res.status(200).json(resultUser))
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

module.exports = router;
