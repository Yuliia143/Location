export interface LocationInterface {
  date: Date;
  description: string;
  array_options: CoordinatesInterface;
}

export interface CoordinatesInterface {
  options_latitudine: number;
  options_longitudine: number;
}

export interface LocationsInterface {
  [key: string]: LocationInterface[];
}
