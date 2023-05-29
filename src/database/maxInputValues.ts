import {
  PressureUnits,
  WeightUnits,
  DiameterUnits,
  DepthUnits,
  MeasurementType,
  UnitType,
} from '../store/slices/types';

export const maxInputValues: Record<
  MeasurementType,
  Partial<Record<UnitType, number>>
> = {
  pressure: { [PressureUnits.PSI]: 10000, [PressureUnits.ATM]: 680 },
  toolWeight: { [WeightUnits.LBS]: 4000, [WeightUnits.KG]: 1800 },
  overBalance: { '%': 100 },
  depth: { [DepthUnits.FT]: 30000, [DepthUnits.M]: 9144 },
  diameter: { [DiameterUnits.INCH]: 0.6, [DiameterUnits.MM]: 16 },
  outerBS: { [WeightUnits.LBS]: 700, [WeightUnits.KG]: 315 },
  weightInAir: { [WeightUnits.LBS]: 250, [WeightUnits.KG]: 113 },
  maxTension: { [WeightUnits.LBS]: 15000, [WeightUnits.KG]: 6750 },
  stretchCoef: { [DepthUnits.FT]: 20, [DepthUnits.M]: 6 },
  outersUsed: { '': 25 },
};
