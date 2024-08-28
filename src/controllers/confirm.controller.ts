import { Request, Response } from 'express';
import mapStatusHTTP from "../utils/mapStatusHTTP";
import ConfirmService from '../services/confirm.service';
import { confirmSchema } from '../schema/confirmSchema';

export default class ConfirmController {
  constructor(
    private confirmService = new ConfirmService(),
  ) { }

  public async confirmMeasure(req: Request, res: Response) {

    const { error } = confirmSchema.validate(req.body);

    if (error) return res.status(400).json({ error_code: "INVALID_DATA", error_description: error.details[0].message });

    const { measure_uuid, confirmed_value } = req.body;

    const { status, data } = await this.confirmService.confirmMeasure(measure_uuid, confirmed_value);

    return res.status(mapStatusHTTP(status)).json(data);
  }


}
