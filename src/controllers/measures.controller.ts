import { Request, Response } from 'express';
import mapStatusHTTP from "../utils/mapStatusHTTP";
import MeasureService from '../services/measures.service';
import { measureSchema } from '../schema/meashureSchema';

export default class MeasureController {
  constructor(
    private measureService = new MeasureService(),
  ) { }

  public async createMeasure(req: Request, res: Response) {

    const { error } = measureSchema.validate(req.body);

    if (error) return res.status(400).json({ error_code: "INVALID_DATA", error_description: error.details[0].message });

    const { image, customer_code, measure_datetime, measure_type  } = req.body;
    
    const { status, data } = await this.measureService.createMeasure({ image, customerCode: customer_code, measureDatetime: measure_datetime, measureType: measure_type.toUpperCase() });
    
    return res.status(mapStatusHTTP(status)).json(data);
  }


}
