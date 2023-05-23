import { Diameter, Pressure, Weight, Depth } from '../store/slices/types';
import { UnitType } from '../store/slices/types';

export const useConvertUnits = () => {
  function convertToEnglish(input: number, unitType: UnitType): number {
    switch (unitType) {
      case Weight.LBS:
        return (input /= 0.45);
      case Pressure.PSI:
        return (input *= 14.7);
      case Diameter.INCH:
        return (input /= 25.4);
      case Depth.FT:
        return (input /= 0.3048);
      default:
        return input;
    }
  }
  function revertToEnglish(input: number, unitType: UnitType): number {
    switch (unitType) {
      case Weight.KG:
        return (input /= 0.45);
      case Pressure.ATM:
        return (input *= 14.7);
      case Diameter.MM:
        return (input /= 25.4);
      case Depth.M:
        return (input /= 0.3048);
      default:
        return input;
    }
  }
  function convertToMetric(input: number, unitType: UnitType): number {
    switch (unitType) {
      case Weight.KG:
        return (input *= 0.45);
      case Pressure.ATM:
        return (input /= 14.7);
      case Diameter.MM:
        return (input *= 25.4);
      case Depth.M:
        return (input *= 0.3048);
      default:
        return input;
    }
  }
  function revertToMetric(input: number, unitType: UnitType): number {
    switch (unitType) {
      case Weight.LBS:
        return (input *= 0.45);
      case Pressure.PSI:
        return (input /= 14.7);
      case Diameter.INCH:
        return (input *= 25.4);
      case Depth.FT:
        return (input *= 0.3048);
      default:
        return input;
    }
  }
  return { convertToEnglish, revertToEnglish, convertToMetric, revertToMetric };
};
