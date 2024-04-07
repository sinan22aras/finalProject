const express = require("express");
const app = express();

// ?  city controller
const controller = require("../controller/city.controller");

// * get all city
app.get("/get", controller.getAllCity());

// * get city by id
app.get("/get-id/:city_id", controller.getCityById());

// * add new city an show new city
app.post("/add", controller.addNewCity());

// * delete city by id
app.delete("/delete/:city_id", controller.deleteCityById());

// * update city by id
app.put("/update/:city_id", controller.updateCityById());

module.exports = app;
