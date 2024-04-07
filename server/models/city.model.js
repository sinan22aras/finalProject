const knex = require("../conn");
const tableName = "city";

class CityModel {
  // ? get all city
  async getAllCityModel() {
    return await knex(tableName).select("*");
  }

  // ? get city by id
  async getCityByIdModel(city_id) {
    return await knex(tableName).where("city_id", city_id);
  }

  // ? add new city an show new city
  async addNewCityModel(body) {
    const [newcityId] = await knex(tableName).insert(body);
    const newcity = await knex(tableName).where("city_id", newcityId).first();

    return newcity;
  }

  // ? delete city by id
  async deleteCityByIdModel(city_id) {
    return await knex(tableName).where("city_id", city_id).del();
  }
  // ? update city by id
  async updateCityByIdModel(body, city_id) {
    await knex(tableName).where("city_id", city_id).update(body);
    const data = await knex(tableName).where("city_id", city_id).select("*");

    return data;
  }
}

module.exports = new CityModel();
