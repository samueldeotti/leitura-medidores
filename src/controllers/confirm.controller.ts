import { Request, Response } from 'express';
import mapStatusHTTP from "../utils/mapStatusHTTP";
import MeasureService from '../services/measures.service';
import { measureSchema } from '../schema/meashureSchema';
import MeasureModel from '../models/measureModel';

export default class ConfirmController {
  constructor(
    private measureService = new MeasureService(),
  ) { }

  public async confirmMeasure(req: Request, res: Response) {

    const { measure_uuid, confirmed_value } = req.body;

    const measure = await MeasureModel.findByPk(measure_uuid);

    if (!measure) {
      return res.status(404).json({
        error_code: 'MEASURE_NOT_FOUND',
        error_description: 'Leitura do mês já realizada'
      });
    }

    if (measure.has_confirmed) {
      return res.status(409).json({
        error_code: 'CONFIRMATION_DUPLICATE',
        error_description: 'Leitura do mês já realizada'
      });
    }

    measure.measure_value = confirmed_value;
    measure.has_confirmed = true;
    await measure.save();

    return res.status(200).json({"success": true});
  }


}
