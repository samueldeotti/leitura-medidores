export interface Measure {
  uuid?: number;
  customerCode: string;
  measureType: 'WATER' | 'GAS';
  measureDatetime: Date;
  image: string;
  measureValue?: number;
  hasConfirmed?: boolean;
}

export interface ResponseMeasure {
  image_url: string;
  measure_uuid: number;
  measure_value: number;
}
