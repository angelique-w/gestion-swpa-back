require("dotenv").config(); // To get environment variables from a .env file
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

// Get the Sequelize config
const sequelize = require("./sequelize");
require("./sequelize/associations");

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", require("./routes/users.route.js"));
app.use("/prestations", require("./routes/prestations.route.js"));
app.use("/usersPrestations", require("./routes/users_prestations.route"));

async function main() {
    try {
        await sequelize.sync(); // Sync Method will create Database using the config & models
        console.log("sequelize.sync ok");
        await sequelize.authenticate();
        console.log("Database connection sucessfull");
        app.listen(PORT, (err) => {
            if (err) throw new Error("Something bad happened...");
            console.log(`Listening to port ${PORT}.`);
        });
    } catch (err) {
        console.error("Unable to reach database", err);
    }
}

if (process.env.NODE_ENV !== "test") {
    main();
}

module.exports = app;
