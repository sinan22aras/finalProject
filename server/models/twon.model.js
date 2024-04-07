const knex = require("../conn");
const tableName = "town";

class TownModel {
  // ? get all Town
  async getAllTownModel() {
    return await knex(tableName).select("*");
  }

  // ? get Town by id
  async getTownByIdModel(town_id) {
    return await knex(tableName).where("town_id", town_id);
  }

  // ? add new Town an show new Town
  async addNewTownModel(body) {
    const [newTownId] = await knex(tableName).insert(body);
    const newTown = await knex(tableName).where("town_id", newTownId).first();

    return newTown;
  }

  // ? delete Town by id
  async deleteTownByIdModel(town_id) {
    return await knex(tableName).where("town_id", town_id).del();
  }
  // ? update Town by id
  async updateTownByIdModel(body, town_id) {
    await knex(tableName).where("town_id", town_id).update(body);
    const data = await knex(tableName).where("town_id", town_id).select("*");

    return data;
  }
}

module.exports = new TownModel();
