export type EnvironmentType = 'fluid' | 'gas';

interface Environment {
  FLUID: 'fluid';
  GAS: 'gas';
}
export const EnvironmentUnits: Environment = {
  FLUID: 'fluid',
  GAS: 'gas',
};

interface Depth {
  FT: 'ft';
  M: 'm';
}

interface Weight {
  LBS: 'lbs';
  KG: 'kg';
}

interface Diameter {
  INCH: 'in';
  MM: 'mm';
}

interface Pressure {
  PSI: 'psi';
  ATM: 'atm';
}

export const DepthUnits: Depth = {
  FT: 'ft',
  M: 'm',
};

export const WeightUnits: Weight = {
  LBS: 'lbs',
  KG: 'kg',
};

export const DiameterUnits: Diameter = {
  INCH: 'in',
  MM: 'mm',
};

export const PressureUnits: Pressure = {
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
  | 'maxTension'
  | 'stretchCoef'
  | 'outersUsed';

export type UnitType =
  | 'lbs'
  | 'kg'
  | 'ft'
  | 'm'
  | 'in'
  | 'mm'
  | 'psi'
  | 'atm'
  | ''
  | '%';
