const knex = require("../conn");
const tableName = "category";

class CategoryModel {
  // ? get all category
  async getAllCategoryModel() {
    return await knex(tableName).select("*");
  }

  // ? get category by id
  async getCategoryByIdModel(category_id) {
    return await knex(tableName).where("category_id", category_id);
  }

  // ? add new category an show new category
  async addNewCategoryModel(body) {
    const [newCategoryId] = await knex(tableName).insert(body);
    const newCategory = await knex(tableName)
      .where("category_id", newCategoryId)
      .first();
    return newCategory;
  }

  // ? delete category by id
  async deleteCategoryByIdModel(category_id) {
    return await knex(tableName).where("category_id", category_id).del();
  }

  // ? update category by id
  async updateCategoryByIdModel(body, category_id) {
    // Remove the created_at ield from the body object
    delete body.created_at;
    // ? katek ka user update dakain created at w update aty bo nanerin xoy automaticy
    // ? katy updated at dagore bo aw katay ka update dakayawa..
    body.updated_at = new Date().toISOString().slice(0, 19).replace("T", " ");

    await knex(tableName).where("category_id", category_id).update(body);
    return await knex(tableName).where("category_id", category_id).select("*");
  }
}

module.exports = new CategoryModel();
