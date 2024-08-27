import MeasureModel from '../models/measureModel';
import { IMeasureModel } from '../Interfaces/Measures/IMeasureModel';
import { ServiceResponse } from '../types/ServiceResponse';
import { Measure } from '../Interfaces/Measures/MeasureType';

export default class ProductService {
  constructor(
    private measureModel: IMeasureModel = new MeasureModel(),
  ) { }

  public async createProduct(product: Measure): Promise<ServiceResponse<Measure>> {
    const createdProduct = await this.measureModel.createMeasure(product);

    return { status: 'SUCCESSFUL', data: createdProduct };
  }


}
