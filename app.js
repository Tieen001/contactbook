const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const contactRoutes = require("./app/routes/contact.route");
app.use("/api/contacts", contactRoutes);

module.exports = app;
