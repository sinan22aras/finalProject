const express = require("express");
const app = express();

// ? user controller
const controller = require("../controller/user.controller");

// * get all users
app.get("/get", controller.getAllUsers());
// * get user by id
app.get("/get-id/:user_id", controller.getUserById());

// * adding new user and showing new user
app.post("/add", controller.addNewUser());

// * delete user by id
app.delete("/delete/:user_id", controller.deleteUserById());

// * update user by id and showing
app.put("/update/:user_id", controller.updateUserById());

module.exports = app;
