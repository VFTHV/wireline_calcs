import {
  PressureUnits,
  WeightUnits,
  DiameterUnits,
  DepthUnits,
  CapacityUnits,
  MeasurementType,
  UnitType,
} from '../store/slices/types';

export const maxInputValues: Record<
  MeasurementType,
  Partial<Record<UnitType, number>>
> = {
  depth: { [DepthUnits.FT]: 30000, [DepthUnits.M]: 9144 },
  toolWeight: { [WeightUnits.LBS]: 4000, [WeightUnits.KG]: 1800 },
  weightInAir: { [WeightUnits.LBS]: 250, [WeightUnits.KG]: 113 },
  diameter: { [DiameterUnits.INCH]: 0.6, [DiameterUnits.MM]: 16 },
  pressure: { [PressureUnits.PSI]: 10000, [PressureUnits.ATM]: 680 },
  capacity: { [CapacityUnits.BBL]: 20, [CapacityUnits.M3]: 3.2 },
  overBalance: { '%': 100 },
  outerBS: { [WeightUnits.LBS]: 700, [WeightUnits.KG]: 315 },
  maxTension: { [WeightUnits.LBS]: 15000, [WeightUnits.KG]: 6750 },
  stretchCoef: { [DepthUnits.FT]: 20, [DepthUnits.M]: 6 },
  outersUsed: { '': 25 },
};
