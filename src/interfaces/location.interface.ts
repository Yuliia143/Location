export interface LocationInterface {
  date: Date;
  description: string;
  array_options: CoordinatesInterface;
}

interface CoordinatesInterface {
  options_latitudine: number;
  options_longitudine: number;
}
