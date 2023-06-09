const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const todoRoute = require("./src/route");

const app = express();
const PORT = process.env.PORT | 8000;

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB Connected"))
    .catch((err) => console.error(err));

app.use(todoRoute);

app.listen(PORT, () => console.log("Server running on port " + PORT));