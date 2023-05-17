import { Pressure, Weight, Diameter, Depth } from '../store/slices/types';

export type MeasurementType =
  | 'pressure'
  | 'weight'
  | 'overBalance'
  | 'depth'
  | 'diameter';

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

export const maxInputValues: Record<
  MeasurementType,
  Partial<Record<UnitType, number>>
> = {
  pressure: { [Pressure.PSI]: 10000, [Pressure.ATM]: 680 },
  weight: { [Weight.LBS]: 4000, [Weight.KG]: 1800 },
  overBalance: { '%': 100 },
  depth: { [Depth.FT]: 30000, [Depth.M]: 9144 },
  diameter: { [Diameter.INCH]: 0.6, [Diameter.MM]: 16 },
};
