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
