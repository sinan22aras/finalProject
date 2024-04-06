const knex = require("../conn");
const tableName = "category";

const models = require("../models/category.model");

class CategoryController {
  // ? get all category
  getAllCategory = () => {
    return async (req, res) => {
      models
        .getAllCategoryModel()
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          console.log(error);
          res.send(error);
        });
    };
  };

  // ? get category by id
  getCategoryById = () => {
    return async (req, res) => {
      const category_id = req.params.category_id;
      models
        .getCategoryByIdModel(category_id)
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          console.log(error);
          res.send(error);
        });
    };
  };

  // ? add new category an show new category

  addNewCategory = () => {
    return async (req, res) => {
      const body = req.body;
      models
        .addNewCategoryModel(body)
        .then((newCategory) => {
          res.status(200).json(newCategory);
        })
        .catch((error) => {
          console.log(error);
          res.send(error);
        });
    };
  };

  // ? delete category by id
  deleteCategoryById = () => {
    return async (req, res) => {
      const category_id = req.params.category_id;
      models
        .deleteCategoryByIdModel(category_id)
        .then(() => {
          res.status(200).json(`Category ID ${category_id} Srayawa`);
        })
        .catch((error) => {
          console.log(error);
          res.send(error);
        });
    };
  };

  // ? update category by id

  updateCategoryById = () => {
    return async (req, res) => {
      const body = req.body;
      const category_id = req.params.category_id;
      models
        .updateCategoryByIdModel(body, category_id)
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

module.exports = new CategoryController();
