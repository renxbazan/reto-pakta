const Query = require("./Query");
const connection = require("../connection/connection");

class UserDB {
  static async findAllUser(callback) {
    try {
      connection.query(Query.FIND_ALL_PAKTA_USERS, (error, rows) => {
        callback(rows);
      });
    } catch (error) {
      console.log("DB Error" + error);
      console.log("DB Error" + JSON.stringify(error));
    }
  }

  static async findOneUser(id, callback) {
    try {
      connection.query(Query.FIND_ONE_PAKTA_USER, id, (error, rows) => {
          //Se retorna el primer ya que valor rows es un array
        callback(rows[0]);
      });
    } catch (error) {
      console.log("DB Error" + error);
      console.log("DB Error" + JSON.stringify(error));
    }
  }

  static async save(user, callback) {
    try {
      connection.query(Query.INSERT_ONE_PAKTA_USER, user, (error, result) => {
        user.id = result.insertId;
        callback(user);
      });
    } catch (error) {
      console.log("DB Error" + error);
      console.log("DB Error" + JSON.stringify(error));
    }
  }
}

module.exports = UserDB;
