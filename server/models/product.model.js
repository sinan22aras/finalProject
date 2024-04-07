const knex = require("../conn");
const tableName = "products";

class ProductModel {
  // ? get all product
  async getAllProductModel() {
    return await knex(tableName).select("*");
  }

  // ? get category by id
  async getProductByIdModel(product_id) {
    return await knex(tableName).where("product_id", product_id);
  }
  // ? add new product and shwo new product
  async addNewProduct(body) {
    const [newproductId] = await knex(tableName).insert(body);
    const newproduct = await knex(tableName)
      .where("product_id", newproductId)
      .first();

    return newproduct;
  }

  // ? delete product by id
  async deleteProductByIdModel(product_id) {
    return await knex(tableName).where("product_id", product_id).del();
  }

  // ? update product by id
  async updateProductByIdModel(body, product_id) {
    delete body.created_at;
    // ? katek ka user update dakain created at w update aty bo nanerin xoy automaticy
    // ? katy updated at dagore bo aw katay ka update dakayawa..
    body.updated_at = new Date().toISOString().slice(0, 19).replace("T", " ");

    await knex(tableName).where("product_id", product_id).update(body);
    return await knex(tableName).where("product_id", product_id).select("*");
  }
}

module.exports = new ProductModel();
