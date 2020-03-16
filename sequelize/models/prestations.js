const Sequelize = require("sequelize");
const sequelize = require("../index");

const Prestation = sequelize.define(
    "Prestation",
    {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        arrivingTime: {
            type: Sequelize.TIME,
            allowNull: true
        },
        departureTime: {
            type: Sequelize.TIME,
            allowNull: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true
        }
    },
    {}
);

module.export = Prestation;
