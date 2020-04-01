const Sequelize = require("sequelize");
const sequelize = require("../index");

const User = sequelize.define(
    "User",
    {
        uuid: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: true
        },
        eMail: {
            type: Sequelize.STRING,
            allowNull: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "piperade"
        }
    },
    {}
);

module.exports = User;
