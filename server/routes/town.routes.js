const express = require("express");
const app = express();
const knex = require("../conn");
const tableName = "town";

// * get all town
app.get("/get", async (req, res) => {
  const data = await knex(tableName).select("*");
  res.status(200).json(data);
});
// * get category by id
app.get("/get-id/:town_id", async (req, res) => {
  const town_id = req.params.town_id;
  const data = await knex(tableName).where("town_id", town_id);
  res.status(200).json(data);
});
// * add new town an show new town
app.post("/add", async (req, res) => {
  try {
    const body = req.body;
    const [newtownId] = await knex(tableName).insert(body);
    const newtown = await knex(tableName).where("town_id", newtownId).first();
    res.status(200).json(newtown);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// * delete town by id
app.delete("/delete/:town_id", async (req, res) => {
  try {
    const town_id = req.params.town_id;
    await knex(tableName).where("town_id", town_id).del();
    res.status(200).json(`town ID ${town_id} Srayawa`);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// * update town by id

app.put("/update/:town_id", async (req, res) => {
  try {
    const body = req.body;
    const town_id = req.params.town_id;
    // ? katek ka user update dakain created at w update aty bo nanerin xoy automaticy
    // ? katy updated at dagore bo aw katay ka update dakayawa..
    body.updated_at = new Date().toISOString().slice(0, 19).replace("T", " ");

    await knex(tableName).where("town_id", town_id).update(body);
    const data = await knex(tableName).where("town_id", town_id).select("*");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = app;
