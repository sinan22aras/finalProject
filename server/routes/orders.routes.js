const express = require("express");
const app = express();
const knex = require("../conn");
const tableName = "orders";

// * get all product
app.get("/get", async (req, res) => {
  const data = await knex(tableName).select("*");
  res.status(200).json(data);
});
// * get category by id
app.get("/get-id/:order_id", async (req, res) => {
  const order_id = req.params.order_id;
  const data = await knex(tableName).where("order_id", order_id);
  res.status(200).json(data);
});
// * add new product an show new product
app.post("/add", async (req, res) => {
  try {
    const body = req.body;
    const [newOrdersId] = await knex(tableName).insert(body);
    const newOrders = await knex("order_details")
      .where("order_id", newOrdersId)
      .first();
    res.status(200).json(newOrders);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// * delete product by id
app.delete("/delete/:order_id", async (req, res) => {
  try {
    const order_id = req.params.order_id;
    await knex(tableName).where("order_id", order_id).del();
    res.status(200).json(`Ordery ID ${order_id} Srayawa`);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// * update product by id

app.put("/update/:order_id", async (req, res) => {
  try {
    const body = req.body;
    const order_id = req.params.order_id;
    // ? katek ka user update dakain created at w update aty bo nanerin xoy automaticy
    // ? katy updated at dagore bo aw katay ka update dakayawa..
    body.updated_at = new Date().toISOString().slice(0, 19).replace("T", " ");

    await knex(tableName).where("order_id", order_id).update(body);
    const data = await knex("order_details")
      .where("order_id", order_id)
      .select("*");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = app;
