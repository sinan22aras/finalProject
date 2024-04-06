

// ? user model
const model = require("../models/user.model");

class UserController {
  // * get all users
  getAllUsers = () => {
    return async (req, res) => {
      model
        .getAllUsersModel()
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => {
          console.log(err);
          res.send(err, "keshayak haya la getAllUsersModel");
        });
    };
  };
  // * get user by id
  getUserById = () => {
    return async (req, res) => {
      const user_id = req.params.user_id;
      model
        .getUserByIdModel(user_id)
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => {
          console.log(err);
          res.send(err, "keshayak haya la getUserByIdModel");
        });
    };
  };
  // * adding new user and showing new user
  addNewUser = () => {
    return async (req, res) => {
      const body = req.body;
      model
        .addNewuserModel(body)
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => {
          console.log(err);
          res.send(err, "keshayak haya la addNewuserModel");
        });
    };
  };
  // * delete user by id
  deleteUserById = () => {
    return async (req, res) => {
      const user_id = req.params.user_id;
      model
        .deleteUserByIdModel(user_id)
        .then((data) => {
          res.status(200).json({ message: `usery ID ${user_id} Srayawa` });
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la deleteUserByIdModel");
        });
    };
  };
  // * update user by id and showing
  updateUserById = () => {
    return async (req, res) => {
      const body = req.body;
      const user_id = req.params.user_id;
      model
        .updateUserByIdModel(body, user_id)
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          console.log(error);
          res.send(error, "keshayak haya la updateUserByIdModel");
        });
    };
  };
}

module.exports = new UserController();
