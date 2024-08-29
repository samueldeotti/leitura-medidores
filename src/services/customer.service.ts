import MeasureModel from '../models/measureModel';
import { IMeasureModel } from '../Interfaces/Measures/IMeasureModel';
import { ServiceResponse } from '../utils/ServiceResponse';
import { Measure } from '../Interfaces/Measures/MeasureType';


export default class CustomerService {
  constructor(
    private measureModel: IMeasureModel = new MeasureModel(),
  ) { }

  public async getCustomerMeasures(query: string): Promise<ServiceResponse<Measure[]>> {
    const measures = await this.measureModel.getCustomerMeasures(query);

    return { status: 'SUCCESSFUL', data: measures };
  }


}
