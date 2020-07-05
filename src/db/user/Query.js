const FIND_ALL_PAKTA_USERS = "SELECT * FROM pakta_user";
const FIND_ONE_PAKTA_USER = "SELECT * FROM pakta_user where id = ?";
const INSERT_ONE_PAKTA_USER =
  "INSERT INTO pakta_user SET ?";

module.exports = {
  FIND_ALL_PAKTA_USERS,
  FIND_ONE_PAKTA_USER,
  INSERT_ONE_PAKTA_USER,
};
