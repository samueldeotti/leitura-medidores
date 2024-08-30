import Joi from 'joi';

export const measureSchema = Joi.object({
  image: Joi.string().base64().required(), 
  customer_code: Joi.string().uuid().required(),
  measure_datetime: Joi.date().required(), 
  measure_type: Joi.string().valid('WATER', 'GAS').uppercase().required(),
});
