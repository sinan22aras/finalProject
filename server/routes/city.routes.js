const express = require("express");
const app = express();
const knex = require("../conn");
const tableName = "city";

// * get all city
app.get("/get", async (req, res) => {
  const data = await knex(tableName).select("*");
  res.status(200).json(data);
});
// * get category by id
app.get("/get-id/:city_id", async (req, res) => {
  const city_id = req.params.city_id;
  const data = await knex(tableName).where("city_id", city_id);
  res.status(200).json(data);
});
// * add new city an show new city
app.post("/add", async (req, res) => {
  try {
    const body = req.body;
    const [newcityId] = await knex(tableName).insert(body);
    const newcity = await knex(tableName).where("city_id", newcityId).first();
    res.status(200).json(newcity);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// * delete city by id
app.delete("/delete/:city_id", async (req, res) => {
  try {
    const city_id = req.params.city_id;
    await knex(tableName).where("city_id", city_id).del();
    res.status(200).json(`city ID ${city_id} Srayawa`);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// * update city by id

app.put("/update/:city_id", async (req, res) => {
  try {
    const body = req.body;
    const city_id = req.params.city_id;
    // ? katek ka user update dakain created at w update aty bo nanerin xoy automaticy
    // ? katy updated at dagore bo aw katay ka update dakayawa..
    body.updated_at = new Date().toISOString().slice(0, 19).replace("T", " ");
    await knex(tableName).where("city_id", city_id).update(body);
    const data = await knex(tableName).where("city_id", city_id).select("*");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = app;
