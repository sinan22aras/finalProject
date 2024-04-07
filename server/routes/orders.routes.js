const express = require("express");
const app = express();

const controller = require("../controller/order.controller");

// ? get all orders
app.get("/get", controller.getAllOrder());

// ? get order by id
app.get("/get-id/:order_id", controller.getOrderById());

// ? add new order an show new order
app.post("/add", controller.addNewOrder());

// ? delete order by id
app.delete("/delete/:order_id", controller.deleteOrderById());

// ? update order by id
app.put("/update/:order_id", controller.updateOrderById());

module.exports = app;
