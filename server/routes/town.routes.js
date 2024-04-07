const express = require("express");
const app = express();

// ? Town controller
const controller = require("../controller/town.controller");

// * get all town
app.get("/get", controller.getAllTown());

// * get category by id
app.get("/get-id/:town_id", controller.getTownById());

// * add new town an show new town
app.post("/add", controller.addNewTown());

// * delete town by id
app.delete("/delete/:town_id", controller.deleteTownById());

// * update town by id
app.put("/update/:town_id", controller.updateTownById());

module.exports = app;
