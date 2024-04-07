const knex = require("../conn");
const tableName = "products";

const models = require("../models/product.model");

class ProductController {
  // ? get all product
  getAllProduct = () => {
    return async (req, res) => {
      models
        .getAllProductModel()
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la getAllProductModel");
        });
    };
  };

  // ? get category by id
  getProdductById = () => {
    return async (req, res) => {
      const product_id = req.params.product_id;
      models
        .getProductByIdModel(product_id)
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la getProductByIdModel");
        });
    };
  };

  // ? add new product an show new product
  addNewProduct = () => {
    return async (req, res) => {
      const body = req.body;
      models
        .addNewProduct(body)
        .then((newproduct) => {
          res.status(200).json(newproduct);
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la addNewProduct");
        });
    };
  };

  // ? delete product by id
  deleteProductById = () => {
    return async (req, res) => {
      const product_id = req.params.product_id;
      models
        .deleteProductByIdModel(product_id)
        .then(() => {
          res.status(200).send(`producty ID ${product_id} Srayawa`);
        })
        .catch((error) => {
          console.log(error);
          res
            .status(404)
            .send(error, "keshayak haya la deleteProductByIdModel");
        });
    };
  };

  // ? update product by id
  updateProdcuById = () => {
    return async (req, res) => {
      const body = req.body;
      const product_id = req.params.product_id;
      models
        .updateProductByIdModel(body, product_id)
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          console.log(error);
          res.status(400).json(error);
        });
    };
  };
}

module.exports = new ProductController();
