const Sequelize = require("sequelize");
const sequelize = require("../index");

const Contract = sequelize.define(
    "Contract",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            // autoIncrement: true
        },
        contract: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = Contract;
