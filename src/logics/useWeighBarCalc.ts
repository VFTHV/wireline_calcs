import { Diameter, Pressure, Weight } from '../store/slices/types';
import { UnitSystemState } from '../store';
import { UnitType } from '../store/slices/types';

const convertUnits = (
  input: number,
  unitType: UnitType,
  convType: 'in' | 'out'
): number => {
  if (convType === 'in') {
    switch (unitType) {
      case Weight.KG:
        return (input /= 0.45);
      case Pressure.ATM:
        return (input *= 14.7);
      case Diameter.MM:
        return (input /= 25.4);
      default:
        return input;
    }
  } else {
    switch (unitType) {
      case Weight.KG:
        return (input *= 0.45);
      case Pressure.ATM:
        return (input /= 14.7);
      case Diameter.MM:
        return (input *= 25.4);
      default:
        return input;
    }
  }
};

export const useWeightBarCalc = (
  diameter: number,
  pressure: number,
  toolWeight: number,
  percentOverBalance: number,
  units: UnitSystemState
) => {
  function balanceWeightCalc() {
    // converting inputs to English
    const convPressure = convertUnits(pressure, units.pressureUnits, 'in');
    const convDiameter = convertUnits(diameter, units.diameterUnits, 'in');

    let balanceWeight = (convPressure * Math.PI * convDiameter ** 2) / 4;
    // converting output
    balanceWeight = convertUnits(balanceWeight, units.weightUnits, 'out');
    return Math.round(balanceWeight);
  }

  function finalWeightCalc() {
    const multiplier = 1 + percentOverBalance / 100;

    // converting inputs to English
    const convPressure = convertUnits(pressure, units.pressureUnits, 'in');
    const convDiameter = convertUnits(diameter, units.diameterUnits, 'in');

    const balanceWeight = (convPressure * Math.PI * convDiameter ** 2) / 4;
    let finalWeight = balanceWeight * multiplier;
    // converting output
    finalWeight = convertUnits(finalWeight, units.weightUnits, 'out');
    return Math.round(finalWeight);
  }

  function sinkerBarWeightCalc() {
    const multiplier = 1 + percentOverBalance / 100;

    // converting inputs to English
    const convPressure = convertUnits(pressure, units.pressureUnits, 'in');
    const convDiameter = convertUnits(diameter, units.diameterUnits, 'in');

    const balanceWeight = (convPressure * Math.PI * convDiameter ** 2) / 4;
    const finalWeight = balanceWeight * multiplier;
    let sinkerBarWeight = finalWeight - toolWeight;

    // converting output
    sinkerBarWeight = convertUnits(sinkerBarWeight, units.weightUnits, 'out');
    return Math.round(sinkerBarWeight);
  }

  return {
    balanceWeight: balanceWeightCalc(),
    finalWeight: finalWeightCalc(),
    sinkerBarWeight: sinkerBarWeightCalc(),
  };
};
