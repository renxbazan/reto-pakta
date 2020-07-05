const UserDB = require("../../db/user/UserDB");
const UserValidator = require("../../validator/UserValidator");

class UserService {
  static findAll(callback) {
    return UserDB.findAllUser(callback);
  }

  static findOne(id, callback) {
    return UserDB.findOneUser(id, callback);
  }

  static save(event, callback) {
    const errors = UserValidator.getValidationErrors(event);
    if (errors) {
      throw new Error(JSON.stringify(errors));
    }
    const userInsertValues = this.generateUserInsertValues(event);
    return UserDB.save(userInsertValues, callback);
  }

  static generateUserInsertValues(event) {
    return JSON.parse(event.body);
  }
}

module.exports = UserService;
