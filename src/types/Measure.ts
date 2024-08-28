export type Measure = {
  uuid: number;
  customerCode: string;
  measureType: 'WATER' | 'GAS';
  measureDatetime: Date;
  image: string;
}