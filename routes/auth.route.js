const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { Op } = require("sequelize");

// Reach Sequelize models
const User = require("../sequelize/models/user");
const Capacity = require("../sequelize/models/capacity");
const Role = require("../sequelize/models/role");

// Get the user that is auth
router.get("/", (req, res) => {
    const pseudo = req.query.pseudo;
    const password = req.query.password;
    User.findOne({
        where: {
            [Op.and]: [{ pseudo: pseudo }, { password: password }],
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

module.exports = router;
