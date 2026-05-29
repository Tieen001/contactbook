const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const contactRoutes = require("./app/routes/contact.route");
app.use("/api/contacts", contactRoutes);

const ApiError = require("./app/api-error");
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

// handle 404 response
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

// define error-handling middleware last, after defining other app.use() and routes calls
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
