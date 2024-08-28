import { IMeasureModel } from '../Interfaces/Measures/IMeasureModel';
import { Measure } from '../Interfaces/Measures/MeasureType';
import SequelizeMeasures from '../database/models/MeasureModel';

export default class MeasureModel implements IMeasureModel {
  private model = SequelizeMeasures;

  async createMeasure(measure: Measure): Promise<any> {
    const createdMeasure = await this.model.create(measure);

    console.log('Measure has been created: ', createdMeasure);

    return createdMeasure;
  }


}