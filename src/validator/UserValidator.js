const Joi = require('joi'); 
class UserValidator {
  
 static getValidationErrors(event) {
    console.log('===getValidationErrors====')
    const userPayloasSchema = this.getUserPayloadSchema();
    return Joi.validate(JSON.parse(event.body), userPayloasSchema).error;
  }

 static getUserPayloadSchema() {
     console.log('===getUserPayloadSchema====')
    const userPayloasSchema = Joi.object().keys({
      document_type: Joi.number().less(10).required(),
      document_number: Joi.string()
        .min(1)
        .max(12)
        .regex(/^[0-9]+$/)
        .required(),
      name: Joi.string().empty('').allow(null).regex(/^[ña-z ÑA-Z]*-?[ña-z ÑA-Z]*$/i),
      last_name: Joi.string().empty('').allow(null).regex(/^[ña-z ÑA-Z]*-?[ña-z ÑA-Z]*$/i),
      description: Joi.string().min(0).max(2000),
    });

    return userPayloasSchema;
  }
}

module.exports = UserValidator;
