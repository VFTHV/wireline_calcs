import {
  Pressure,
  Weight,
  Diameter,
  Depth,
  MeasurementType,
  UnitType,
} from '../store/slices/types';

export const maxInputValues: Record<
  MeasurementType,
  Partial<Record<UnitType, number>>
> = {
  pressure: { [Pressure.PSI]: 10000, [Pressure.ATM]: 680 },
  toolWeight: { [Weight.LBS]: 4000, [Weight.KG]: 1800 },
  overBalance: { '%': 100 },
  depth: { [Depth.FT]: 30000, [Depth.M]: 9144 },
  diameter: { [Diameter.INCH]: 0.6, [Diameter.MM]: 16 },
  outerBS: { [Weight.LBS]: 700, [Weight.KG]: 315 },
  weightInAir: { [Weight.LBS]: 250, [Weight.KG]: 113 },
  maxTension: { [Weight.LBS]: 15000, [Weight.KG]: 6750 },
};
