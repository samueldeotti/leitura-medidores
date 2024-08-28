import { IMeasureModel } from '../Interfaces/Measures/IMeasureModel';
import MeasureModel from '../models/measureModel';
import { ServiceResponse } from '../types/ServiceResponse';

export default class ConfirmService {
  constructor(
    private measureModel: IMeasureModel = new MeasureModel(),
  ) { }

  public async confirmMeasure(measureUuid:string, confirmedValue: number): Promise<ServiceResponse<{"success": true}>> {

    const measure = await this.measureModel.findByPk(measureUuid);

    if (!measure) {
      return {
        status: 'NOT_FOUND',
        data: {
          error_code: 'MEASURE_NOT_FOUND',
          error_description: 'Leitura do mês já realizada'
        }
      }
    }


    if (measure.hasConfirmed) {
      return {
        status: 'BAD_REQUEST',
        data: {
          error_code: 'CONFIRMATION_DUPLICATE',
          error_description: 'Leitura do mês já confirmada'
        }
      }
    }

    await this.measureModel.confirmMeasure(measure, confirmedValue);

    return { status: 'SUCCESSFUL', data: {"success": true} };
  }


}
