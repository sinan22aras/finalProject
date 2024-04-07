// ? city model
const models = require("../models/twon.model");

class TownController {
  // * get all city
  getAllTown = () => {
    return async (req, res) => {
      models
        .getAllTownModel()
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la getAllTownModel");
        });
    };
  };

  // * get city by id
  getTownById = () => {
    return async (req, res) => {
      const town_id = req.params.town_id;
      models
        .getTownByIdModel(town_id)
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la getTownByIdModel");
        });
    };
  };

  // * add new city an show new city
  addNewTown = () => {
    return async (req, res) => {
      const body = req.body;
      models
        .addNewTownModel(body)
        .then((newcity) => {
          res.status(200).json(newcity);
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la addNewTownModel");
        });
    };
  };

  // * delete city by id
  deleteTownById = () => {
    return async (req, res) => {
      const town_id = req.params.town_id;
      models
        .deleteTownByIdModel(town_id)
        .then(() => {
          res.status(200).json(`Town ID ${town_id} Srayawa`);
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la deleteTownByIdModel");
        });
    };
  };

  // * update city by id
  updateTownById = () => {
    return async (req, res) => {
      const body = req.body;
      const town_id = req.params.town_id;
      models
        .updateTownByIdModel(body, town_id)
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la updateTownByIdModel");
        });
    };
  };
}

module.exports = new TownController();
