const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const sequelize = require("./config/db"); 
const User  = require("./models/userModel"); 
const routes = require("./routes/userRoutes")

const cors = require('cors'); 

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(routes);





const PORT = process.env.PORT || 3000;
sequelize.sync() 
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Unable to sync Sequelize with database:", error);
    });