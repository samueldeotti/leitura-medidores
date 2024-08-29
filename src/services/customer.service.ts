import MeasureModel from '../models/measureModel';
import { IMeasureModel } from '../Interfaces/Measures/IMeasureModel';
import { ServiceResponse } from '../utils/ServiceResponse';
import { Measure } from '../Interfaces/Measures/MeasureType';


export default class CustomerService {
  constructor(
    private measureModel: IMeasureModel = new MeasureModel(),
  ) { }

  public async getCustomerMeasures(query:  { customer_code: string, measure_type?: string }): Promise<ServiceResponse<Measure[]>> {
    const measures = await this.measureModel.getCustomerMeasures(query);

    if (!measures.length) {
      return {
        status: 'NOT_FOUND',
        data: {
          error_code: 'MEASURES_NOT_FOUND',
          error_description: 'Nenhuma leitura encontrada'
        }
      } 
    }

    return { status: 'SUCCESSFUL', data: measures };
  }


}
