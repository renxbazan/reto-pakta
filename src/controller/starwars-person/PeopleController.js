"use strict";
const queryString = require('querystring');
const PeopleService = require("../../service/starwars-person/PeopleService");


module.exports.findByName = async (event, context) => {

    try {
      const json = await  PeopleService.findPersonsByName(event);
      return {
        statusCode: 200,
        body: JSON.stringify({
          statusCode: 200,
          body: json,
        }),
      };
    
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          statusCode: 500,
          body: JSON.stringify(`ha ocurridoun error ${error}`),
        }),
    }
  };
}