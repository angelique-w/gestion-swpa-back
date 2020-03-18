const Sequelize = require("sequelize");
const sequelize = require("../index");

const Capacity = sequelize.define(
    "Capacity",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Capacity: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {}
);

module.export = Capacity;
