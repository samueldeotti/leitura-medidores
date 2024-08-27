import { Measure } from './MeasureType';

export interface IMeasureModel {
  createMeasure(measure: Measure): Promise<Measure>;
}
