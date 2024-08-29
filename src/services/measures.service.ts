import MeasureModel from '../models/measureModel';
import { IMeasureModel } from '../Interfaces/Measures/IMeasureModel';
import { ServiceResponse } from '../utils/ServiceResponse';
import { Measure, ResponseMeasure } from '../Interfaces/Measures/MeasureType';
import { getGeminiMeasure } from '../utils/geminiService';

export default class MeasureService {
  constructor(
    private measureModel: IMeasureModel = new MeasureModel(),
  ) { }

  public async createMeasure(measure: Measure): Promise<ServiceResponse<ResponseMeasure>> {

    const teste = await getGeminiMeasure(measure.image);

    console.log(teste, 'teste')

    const geminiMeasureValue: number = 0 

    console.log('Gemini measure value: ', geminiMeasureValue);

    const createdMeasure = await this.measureModel.createMeasure({...measure, measureValue: geminiMeasureValue });

    const formattedMeasure: ResponseMeasure = {
      image_url: createdMeasure.image,
      measure_value: createdMeasure.measureValue as number,
      measure_uuid: createdMeasure.uuid as number,
    }

    return { status: 'SUCCESSFUL', data: formattedMeasure };
  }


}
