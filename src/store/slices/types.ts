export interface EnvironmentType {
  FLUID: 'fluid';
  GAS: 'gas';
}
export const Environment: EnvironmentType = {
  FLUID: 'fluid',
  GAS: 'gas',
};

interface DepthType {
  FT: 'ft';
  M: 'm';
}

interface WeightType {
  LBS: 'lbs';
  KG: 'kg';
}

interface DiameterType {
  INCH: 'in';
  MM: 'mm';
}

interface PressureType {
  PSI: 'psi';
  ATM: 'atm';
}

export const Depth: DepthType = {
  FT: 'ft',
  M: 'm',
};

export const Weight: WeightType = {
  LBS: 'lbs',
  KG: 'kg',
};

export const Diameter: DiameterType = {
  INCH: 'in',
  MM: 'mm',
};

export const Pressure: PressureType = {
  PSI: 'psi',
  ATM: 'atm',
};

export type MeasurementType =
  | 'pressure'
  | 'toolWeight'
  | 'overBalance'
  | 'depth'
  | 'diameter'
  | 'outerBS'
  | 'weightInAir'
  | 'maxTension';

export type UnitType =
  | 'lbs'
  | 'kg'
  | 'ft'
  | 'm'
  | 'in'
  | 'mm'
  | 'psi'
  | 'atm'
  | '%';
