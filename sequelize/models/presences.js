const Sequelize = require("sequelize");
const sequelize = require("../index");

const Presence = sequelize.define(
    "Presence",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        presence: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {}
);

module.export = Presence;
