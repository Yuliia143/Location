import { CoordinatesInterface } from './location.interface';

export interface ReportInterface {
  description: string;
  date: number;
  duree: number;
  array_options: CoordinatesInterface;
}
