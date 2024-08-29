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

    const { measureValue, imageUrl } = await getGeminiMeasure(measure.image);

    const createdMeasure = await this.measureModel.createMeasure({...measure, measureValue: Number(measureValue), image: imageUrl});

    const formattedMeasure: ResponseMeasure = {
      image_url: createdMeasure.image,
      measure_value: createdMeasure.measureValue as number,
      measure_uuid: createdMeasure.uuid as number,
    }

    return { status: 'SUCCESSFUL', data: formattedMeasure };
  }


}
