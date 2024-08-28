import MeasureModel from '../models/measureModel';
import { IMeasureModel } from '../Interfaces/Measures/IMeasureModel';
import { ServiceResponse } from '../types/ServiceResponse';
import { Measure } from '../Interfaces/Measures/MeasureType';

export default class MeasureService {
  constructor(
    private measureModel: IMeasureModel = new MeasureModel(),
  ) { }

  public async createMeasure(measure: Measure): Promise<ServiceResponse<Measure>> {
    const createdMeasure = await this.measureModel.createMeasure(measure);

    return { status: 'SUCCESSFUL', data: createdMeasure };
  }


}
