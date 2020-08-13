const express = require("express");

const recipeRoutes = require("./routes/recipe-routes");
const ingredientsRoutes = require("./routes/ingredients-router");

const server = express();

server.use(express.json());
server.use("/api/recipes", recipeRoutes);
server.use("/api/ingredients", ingredientsRoutes);

module.exports = server;
