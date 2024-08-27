import measuresService from '../services/measures.service';
import { Request, Response } from 'express';
import mapStatusHTTP from "../utils/mapStatusHTTP";
import MeasureService from '../services/measures.service';

export default class MeasureController {
  constructor(
    private measureService = new MeasureService(),
  ) { }

  public async createProduct(req: Request, res: Response) {
    const { image, customer_code, measure_datetime, measure_type  } = req.body;
    const { status, data } = await this.measureService.createProduct({ image, customerCode: customer_code, measureDatetime: measure_datetime, measureType: measure_type });
    
    return res.status(mapStatusHTTP(status)).json(data);
  }


}
