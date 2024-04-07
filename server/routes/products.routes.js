const express = require("express");
const app = express();

// ? Product controoler
const controller = require("../controller/product.controller");

// * get all product
app.get("/get", controller.getAllProduct());

// * get category by id
app.get("/get-id/:product_id", controller.getProdductById());

// * add new product an show new product
app.post("/add", controller.addNewProduct());

// * delete product by id
app.delete("/delete/:product_id", controller.deleteProductById());

// * update product by id
app.put("/update/:product_id", controller.updateProdcuById());

module.exports = app;
