export interface LocationInterface {
  id: number;
  date: Date;
  desc: string;
  array_options: CoordinatesInterface;
}

interface CoordinatesInterface {
  options_latitudine: number;
  options_longitudine: number;
}
