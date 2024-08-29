import Joi from 'joi';

export const confirmSchema = Joi.object({
  measure_uuid: Joi.string().uuid().required().messages({
    'string.base': 'measure_uuid tem que ser uma string',
    'string.empty': 'measure_uuid não pode ser vazio',
    'string.uuid': 'measure_uuid tem que ser um UUID válido',
  }), 
  confirmed_value: Joi.number().required().messages({
    'number.base': 'confirmed_value tem que ser um número',
    'number.empty': 'confirmed_value não pode ser vazio',
  }),
});
