"use strict";
const UserService = require("../../service/user/UserService");

module.exports.findAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    UserService.findAll((users) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(users),
      });
    });
  } catch (error) {
    callback(
      null,
      {
      statusCode: 500,
      body: JSON.stringify(`ha ocurridoun error ${error}`),
    });
  }
};

module.exports.findOne = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const { id } = event.pathParameters;
  try {
    UserService.findOne(id,(user) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(user),
      });
    });
  } catch (error) {
    callback(
      null,
      {
      statusCode: 500,
      body: JSON.stringify(`ha ocurridoun error ${error}`),
    });
  }
};

module.exports.save = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  
  try {
    UserService.save(event,(user) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(user),
      });
    });
  } catch (error) {
    callback(
      null,
      {
      statusCode: 500,
      body: JSON.stringify(`ha ocurridoun error ${error}`),
    });
  }
};