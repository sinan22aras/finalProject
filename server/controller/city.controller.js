// ? city model
const models = require("../models/city.model.js");

class CityController {
  // * get all city
  getAllCity = () => {
    return async (req, res) => {
      models
        .getAllCityModel()
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la getAllCityModel");
        });
    };
  };

  // * get city by id
  getCityById = () => {
    return async (req, res) => {
      const city_id = req.params.city_id;
      models
        .getCityByIdModel(city_id)
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la getCityByIdModel");
        });
    };
  };

  // * add new city an show new city
  addNewCity = () => {
    return async (req, res) => {
      const body = req.body;
      models
        .addNewCityModel(body)
        .then((newcity) => {
          res.status(200).json(newcity);
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la addNewCityModel");
        });
    };
  };

  // * delete city by id
  deleteCityById = () => {
    return async (req, res) => {
      const city_id = req.params.city_id;
      models
        .deleteCityByIdModel(city_id)
        .then(() => {
          res.status(200).json(`city ID ${city_id} Srayawa`);
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la deleteCityByIdModel");
        });
    };
  };

  // * update city by id
  updateCityById = () => {
    return async (req, res) => {
      const body = req.body;
      const city_id = req.params.city_id;
      models
        .updateCityByIdModel(body, city_id)
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la updateCityByIdModel");
        });
    };
  };
}

module.exports = new CityController();
