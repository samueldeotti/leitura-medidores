import { Measure } from './MeasureType';

export interface IMeasureModel {
  createMeasure(measure: Measure): Promise<Measure>;
  findByPk(measureUuid: string): Promise<Measure | null>;
  confirmMeasure(measure: Measure, confirmedValue: number): Promise<Measure>;
  getCustomerMeasures(query: string): Promise<Measure[]>;
}
