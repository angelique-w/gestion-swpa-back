const Sequelize = require("sequelize");
const sequelize = require("../index");

const Attendance = sequelize.define(
    "Attendance",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        attendance: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {}
);

module.export = Attendance;
