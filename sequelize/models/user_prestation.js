const Sequelize = require("sequelize");
const sequelize = require("../index");

const User_Prestation = sequelize.define(
    "User_Prestation",
    {
        presence: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        car: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    { timestamps: false }
);

module.exports = User_Prestation;
