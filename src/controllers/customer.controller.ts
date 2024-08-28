import { Request, Response } from 'express';

import { confirmSchema } from '../schema/confirmSchema';
import CustomerService from '../services/customer.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class ConfirmController {
  constructor(
    private customerService = new CustomerService(),
  ) { }

  public async getCustomerMeasures(req: Request, res: Response) {

    const { error } = confirmSchema.validate(req.body);

    if (error) return res.status(400).json({ error_code: "INVALID_TYPE", error_description: error.details[0].message });

    const { customer_code } = req.params;
    const { measure_type } = req.query;


    const query = { customer_code } as any;
    if (measure_type) {
      query.measure_type = measure_type.toString().toUpperCase();
    }

    console.log(query, 'query');

    const measures = await this.customerService.getCustomerMeasures(query);

    // console.log(measures, 'measures');

    if (!measures) {
      return res.status(404).json({
        error_code: 'MEASURES_NOT_FOUND',
        error_description: 'Nenhuma leitura encontrada'
      });
    }

    const { status, data } = await this.customerService.getCustomerMeasures(query);

    return res.status(mapStatusHTTP(status)).json({customer_code, measures: data});
  }


}
