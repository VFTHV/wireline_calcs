import {
  DiameterUnits,
  PressureUnits,
  WeightUnits,
  DepthUnits,
} from '../store/slices/types';
import { UnitType } from '../store/slices/types';

export const useConvertUnits = () => {
  function convertToEnglish(input: number, unitType: UnitType): number {
    switch (unitType) {
      case WeightUnits.LBS:
        return (input /= 0.45);
      case PressureUnits.PSI:
        return (input *= 14.7);
      case DiameterUnits.INCH:
        return (input /= 25.4);
      case DepthUnits.FT:
        return (input /= 0.3048);
      default:
        return input;
    }
  }
  function revertToEnglish(input: number, unitType: UnitType): number {
    switch (unitType) {
      case WeightUnits.KG:
        return (input /= 0.45);
      case PressureUnits.ATM:
        return (input *= 14.7);
      case DiameterUnits.MM:
        return (input /= 25.4);
      case DepthUnits.M:
        return (input /= 0.3048);
      default:
        return input;
    }
  }
  function convertToMetric(input: number, unitType: UnitType): number {
    switch (unitType) {
      case WeightUnits.KG:
        return (input *= 0.45);
      case PressureUnits.ATM:
        return (input /= 14.7);
      case DiameterUnits.MM:
        return (input *= 25.4);
      case DepthUnits.M:
        return (input *= 0.3048);
      default:
        return input;
    }
  }
  function revertToMetric(input: number, unitType: UnitType): number {
    switch (unitType) {
      case WeightUnits.LBS:
        return (input *= 0.45);
      case PressureUnits.PSI:
        return (input /= 14.7);
      case DiameterUnits.INCH:
        return (input *= 25.4);
      case DepthUnits.FT:
        return (input *= 0.3048);
      default:
        return input;
    }
  }
  return { convertToEnglish, revertToEnglish, convertToMetric, revertToMetric };
};
