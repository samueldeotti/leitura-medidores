import { IMeasureModel } from '../Interfaces/Measures/IMeasureModel';
import { Measure } from '../Interfaces/Measures/MeasureType';
import SequelizeMeasures from '../database/models/MeasureModel';

export default class ProductModel implements IMeasureModel {
  private model = SequelizeMeasures;

  async createMeasure(product: Measure): Promise<Measure> {
    const createdProduct = await this.model.create(product);
    return createdProduct;
  }


}