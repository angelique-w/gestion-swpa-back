const Sequelize = require("sequelize");
const sequelize = require("../index");

const Capacity = sequelize.define(
    "Capacity",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        capacity: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = Capacity;
