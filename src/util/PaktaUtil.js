const nodeFetch = require("node-fetch");
class PaktaUtil {
    

 
  static async getRequest(url) {
   
    let data = await await nodeFetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
  return data;

  }
  
}

module.exports = PaktaUtil;
