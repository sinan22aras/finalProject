const knex = require("../conn");
const tableName = "users";
class UserModel {
  // * get all users
  async getAllUsersModel() {
    return await knex.select("*").from(tableName);
  }

  // * get user by id
  async getUserByIdModel(user_id) {
    return await knex(tableName).where("user_id", user_id);
  }

  // * adding new user and showing new user
  async addNewuserModel(body) {
    const isEmailUsed = await knex(tableName)
      .where("email", body.email)
      .first();
    if (isEmailUsed) {
      throw new Error("Email already in use");
    }
    const [newUserId] = await knex(tableName).insert(body);
    const newUser = await knex(tableName).where("user_id", newUserId).first();
    return newUser;
  }
  // * delete user by id
  async deleteUserByIdModel(user_id) {
    return await knex(tableName).where("user_id", user_id).del();
  }

  // * update user by id and showing
  async updateUserByIdModel(body, user_id) {
    // ? katek ka user update dakain created at w update aty bo nanerin xoy automaticy
    // ? katy updated at dagore bo aw katay ka update dakayawa..
    // Remove the created_at ield from the body object
    delete body.created_at;
    body.updated_at = new Date().toISOString().slice(0, 19).replace("T", " ");
    await knex(tableName).where("user_id", user_id).update(body);
    const user = await knex(tableName).where("user_id", user_id).select("*");
    return user;
  }
}

module.exports = new UserModel();
