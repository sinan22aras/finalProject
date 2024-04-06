const express = require("express");
const app = express();
const knex = require("../conn");
const tableName = "category";

// ? Category Controller
const controller = require("../controller/category.controller");

// ? get all category
app.get("/get", controller.getAllCategory());

// ? get category by id
app.get("/get-id/:category_id", controller.getCategoryById());

// ? add new category an show new category
app.post("/add", controller.addNewCategory());

// ? delete category by id
app.delete("/delete/:category_id", controller.deleteCategoryById());

// ? update category by id

app.put("/update/:category_id", controller.updateCategoryById());

module.exports = app;
