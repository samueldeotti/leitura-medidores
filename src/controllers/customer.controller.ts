import { Request, Response } from 'express';

import CustomerService from '../services/customer.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import { querySchema } from '../schema/customerQuerySchema';

export default class ConfirmController {
  constructor(
    private customerService = new CustomerService(),
  ) { }

  public async getCustomerMeasures(req: Request, res: Response) {

    const { customer_code } = req.params;
    const { measure_type } = req.query;

    const { error } = querySchema.validate({customer_code, measure_type});

    if (error) return res.status(400).json({ error_code: "INVALID_TYPE", error_description: error.details[0].message });


    const query = { customer_code } as any;
    if (measure_type) { query.measure_type = measure_type.toString().toUpperCase()}

    const measures = await this.customerService.getCustomerMeasures(query);

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
