const Sequelize = require("sequelize");
const sequelize = require("../index");

const Role = sequelize.define(
    "Role",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            // autoIncrement: true
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = Role;
