export type Measure = {
  uuid: number;
  imageUrl: string;
  customerCode: string;
  measureType: 'WATER' | 'GAS';
  measureValue: number;
  measureDate: Date;
  hasConfirmed: boolean;
}