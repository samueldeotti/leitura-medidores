import Joi from 'joi';

export const querySchema = Joi.object({
  customer_code: Joi.string().uuid().required().messages({
    'string.empty': 'O parâmetro "customer_code" não pode estar vazio.',
    'string.uuid': 'O parâmetro "customer_code" deve ser um UUID válido.',
  }),
  measure_type: Joi.string().valid('WATER', 'GAS').optional().uppercase().messages({
    'any.only': 'Tipo de medição não permitida',
  }),
});