const Joi = require('@hapi/joi');
const registerSchema = Joi.object({
   username : Joi.string().alphanum().min(8).required(),
   email : Joi.string().email().required(),
   password : Joi.string().min(8).required(),
   userId : Joi.string().min(8).required()
}).options({
    abortEarly : false
});

const loginSchema = Joi.object({
    userId : Joi.string().alphanum().min(8).required(),
    password : Joi.string().min(8).required()
}).options({
    abortEarly : false
});

module.exports = {registerSchema,loginSchema};