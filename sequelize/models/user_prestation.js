const Sequelize = require("sequelize");
const sequelize = require("../index");

const User_Prestation = sequelize.define(
    "User_Prestation",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        presence: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        car: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
    },
    { timestamps: false }
);

module.exports = User_Prestation;
