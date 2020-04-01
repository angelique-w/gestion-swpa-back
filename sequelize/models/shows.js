const Sequelize = require("sequelize");
const sequelize = require("../index");

const Show = sequelize.define(
    "Show",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        presence: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    { timestamps: false }
);

module.exports = Show;
