const Sequelize = require("sequelize");
const sequelize = require("../index");

const Function = sequelize.define(
    "Function",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        function: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {}
);

module.export = Function;
