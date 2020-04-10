const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

// Reach Sequelize models
const Prestation = require("../sequelize/models/prestation");
const Contract = require("../sequelize/models/contract");

// Get all prestations
router.get("/", (req, res) => {
    Prestation.findAll({ include: [{ model: Contract }] })
        .then((prestations) => res.status(200).json(prestations))
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

// Get one prestation
router.get("/:id", (req, res) => {
    const id = req.params.id;
    Prestation.findOne({
        where: {
            id: id,
        },
        include: [{ model: Contract }],
    })
        .then((resultPrestations) => res.status(200).json(resultPrestations))
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

// Post a prestation
router.post("/", (req, res) => {
    const location = req.body.location;
    const date = req.body.date;
    const arrivingTime = req.body.arrivingTime;
    const departureTime = req.body.departureTime;
    const description = req.body.description;
    const comments = req.body.comments;
    const contractId = req.body.contractId;
    const prestation = {
        location,
        date,
        arrivingTime,
        departureTime,
        description,
        comments,
        contractId,
    };
    Prestation.create(prestation)
        .then((resultPrestation) => res.status(200).json(resultPrestation))
        .catch((err) => {
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

// Put a user
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const location = req.body.location;
    const date = req.body.date;
    const arrivingTime = req.body.arrivingTime;
    const departureTime = req.body.departureTime;
    const description = req.body.description;
    const comments = req.body.comments;
    const contractId = req.body.contractId;
    const prestation = {
        location,
        date,
        arrivingTime,
        departureTime,
        description,
        comments,
        contractId,
    };
    Prestation.update(prestation, {
        where: {
            id: id,
        },
    })
        .then((resultPrestation) => res.status(200).json(resultPrestation))
        .catch((err) => {
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

// Delete a user
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Prestation.destroy({
        where: {
            id: id,
        },
    })
        .then((resultPrestation) => res.status(200).json(resultPrestation))
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                status: "error",
                message: "invalid request",
            });
        });
});

module.exports = router;
