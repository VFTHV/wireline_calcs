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

interface Capacity {
  BBL: 'bbl/100ft';
  M3: 'cu.m/m';
}

interface Temperature {
  DEGF: 'degF';
  DEGC: 'degC';
}

interface Resistivity {
  OHM_KFT: 'Ohm/Kft';
  OHM_KM: 'Ohm/Km';
}

interface Resistance {
  OHM: 'Ohm';
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

export const CapacityUnits: Capacity = {
  BBL: 'bbl/100ft',
  M3: 'cu.m/m',
};

export const TempUnits: Temperature = {
  DEGF: 'degF',
  DEGC: 'degC',
};

export const ResistivityUnits: Resistivity = {
  OHM_KFT: 'Ohm/Kft',
  OHM_KM: 'Ohm/Km',
};

export const ResistanceUnits: Resistance = {
  OHM: 'Ohm',
};

export type MeasurementType =
  | 'depth'
  | 'weightInAir'
  | 'toolWeight'
  | 'diameter'
  | 'pressure'
  | 'capacity'
  | 'overBalance'
  | 'outerBS'
  | 'maxTension'
  | 'stretchCoef'
  | 'outersUsed'
  | 'temperature'
  | 'resistivity'
  | 'resistance'
  | 'toolOd';

export type UnitType =
  | 'lbs'
  | 'kg'
  | 'ft'
  | 'm'
  | 'in'
  | 'mm'
  | 'psi'
  | 'atm'
  | 'bbl/100ft'
  | 'cu.m/m'
  | ''
  | '%'
  | 'degF'
  | 'degC'
  | 'Ohm/Kft'
  | 'Ohm/Km'
  | 'Ohm'
  | 'usec';
