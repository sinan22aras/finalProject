const knex = require("../conn");
const tableName = "products";

class ProductController {
  // * get all product
  getAllProduct = () => {
    return async (req, res) => {
      const data = await knex(tableName).select("*");
      res.status(200).json(data);
    };
  };

  // * get category by id
  getProdductById = () => {
    return async (req, res) => {
      const product_id = req.params.product_id;
      const data = await knex(tableName).where("product_id", product_id);
      res.status(200).json(data);
    };
  };

  // * add new product an show new product
  addNewProduct = () => {
    return async (req, res) => {
      try {
        const body = req.body;
        const [newproductId] = await knex(tableName).insert(body);
        const newproduct = await knex(tableName)
          .where("product_id", newproductId)
          .first();
        res.status(200).json(newproduct);
      } catch (error) {
        console.log(error);
        res.send(error);
      }
    };
  };

  // * delete product by id
  deleteProductById = () => {
    return async (req, res) => {
      try {
        const product_id = req.params.product_id;
        await knex(tableName).where("product_id", product_id).del();
        res.status(200).json(`product ID ${product_id} Srayawa`);
      } catch (error) {
        console.log(error);
        res.send(error);
      }
    };
  };

  // * update product by id
  updateProdcuById = () => {
    return async (req, res) => {
      try {
        const body = req.body;
        const product_id = req.params.product_id;
        // Remove the created_at ield from the body object
        delete body.created_at;

        // ? katek ka user update dakain created at w update aty bo nanerin xoy automaticy
        // ? katy updated at dagore bo aw katay ka update dakayawa..
        body.updated_at = new Date()
          .toISOString()
          .slice(0, 19)
          .replace("T", " ");

        await knex(tableName).where("product_id", product_id).update(body);
        const data = await knex(tableName)
          .where("product_id", product_id)
          .select("*");
        res.status(200).json(data);
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
    };
  };
}

module.exports = new ProductController();
