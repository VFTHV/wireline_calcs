import {
  DiameterUnits,
  PressureUnits,
  WeightUnits,
  DepthUnits,
  CapacityUnits,
  TempUnits,
} from '../store/slices/types';
import { UnitType } from '../store/slices/types';

export const useConvertUnits = () => {
  function convertToEnglish(input: number, unitType: UnitType): number {
    switch (unitType) {
      case DepthUnits.FT:
        return (input /= 0.3048);
      case WeightUnits.LBS:
        return (input /= 0.45);
      case DiameterUnits.INCH:
        return (input /= 25.4);
      case PressureUnits.PSI:
        return (input *= 14.7);
      case CapacityUnits.BBL:
        return (input /= 0.158987294928);
      case TempUnits.DEGF:
        return (5 * (input - 32)) / 9;
      default:
        return input;
    }
  }
  function revertToEnglish(input: number, unitType: UnitType): number {
    switch (unitType) {
      case DepthUnits.M:
        return (input /= 0.3048);
      case WeightUnits.KG:
        return (input /= 0.45);
      case DiameterUnits.MM:
        return (input /= 25.4);
      case PressureUnits.ATM:
        return (input *= 14.7);
      case CapacityUnits.M3:
        return (input /= 0.158987294928);
      case TempUnits.DEGC:
        return (5 * (input - 32)) / 9;
      default:
        return input;
    }
  }
  function convertToMetric(input: number, unitType: UnitType): number {
    switch (unitType) {
      case DepthUnits.M:
        return +(input *= 0.3048).toFixed(0);
      case WeightUnits.KG:
        return +(input *= 0.45).toFixed(0);
      case DiameterUnits.MM:
        return +(input *= 25.4).toFixed(2);
      case PressureUnits.ATM:
        return +(input /= 14.7).toFixed(0);
      case CapacityUnits.M3:
        return +(input *= 0.158987294928).toFixed(2);
      case TempUnits.DEGC:
        return +((9 * input) / 5 + 32).toFixed(2);
      default:
        return input;
    }
  }
  function revertToMetric(input: number, unitType: UnitType): number {
    switch (unitType) {
      case DepthUnits.FT:
        return +(input *= 0.3048).toFixed(0);
      case WeightUnits.LBS:
        return +(input *= 0.45).toFixed(0);
      case DiameterUnits.INCH:
        return +(input *= 25.4).toFixed(2);
      case PressureUnits.PSI:
        return +(input /= 14.7).toFixed(0);
      case CapacityUnits.BBL:
        return +(input *= 0.158987294928).toFixed(2);
      case TempUnits.DEGF:
        return +((9 * input) / 5 + 32).toFixed(2);
      default:
        return input;
    }
  }
  return { convertToEnglish, revertToEnglish, convertToMetric, revertToMetric };
};
