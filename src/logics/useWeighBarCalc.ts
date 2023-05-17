import { Diameter, Pressure, Weight } from '../store/slices/types';
import { UnitSystemState } from '../store';

export const useWeightBarCalc = (
  diameter: number,
  pressure: number,
  toolWeight: number,
  percentOverBalance: number,
  unitSystem: UnitSystemState
) => {
  function balanceWeightCalc() {
    // converting inputs to English
    let convPressure = pressure;
    if (unitSystem.pressureUnits === Pressure.ATM) convPressure *= 14.7;
    let convDiameter = diameter;
    if (unitSystem.diameterUnits === Diameter.MM) convDiameter /= 25.4;

    let balanceWeight = (convPressure * Math.PI * convDiameter ** 2) / 4;

    // converting output
    if (unitSystem.weightUnits === Weight.KG) balanceWeight *= 0.45;

    return Math.round(balanceWeight);
  }

  function finalWeightCalc() {
    const multiplier = 1 + percentOverBalance / 100;

    // converting inputs to English
    let convPressure = pressure;
    if (unitSystem.pressureUnits === Pressure.ATM) convPressure *= 14.7;
    let convDiameter = diameter;
    if (unitSystem.diameterUnits === Diameter.MM) convDiameter /= 25.4;

    const balanceWeight = (convPressure * Math.PI * convDiameter ** 2) / 4;
    let finalWeight = balanceWeight * multiplier;

    // converting output
    if (unitSystem.weightUnits === Weight.KG) finalWeight *= 0.45;

    return Math.round(finalWeight);
  }

  function sinkerBarWeightCalc() {
    const multiplier = 1 + percentOverBalance / 100;

    // converting inputs to English
    let convPressure = pressure;
    if (unitSystem.pressureUnits === Pressure.ATM) convPressure *= 14.7;
    let convDiameter = diameter;
    if (unitSystem.diameterUnits === Diameter.MM) convDiameter /= 25.4;

    const balanceWeight = (convPressure * Math.PI * convDiameter ** 2) / 4;
    const finalWeight = balanceWeight * multiplier;
    let sinkerBarWeight = Math.round(finalWeight - toolWeight);

    // converting output
    if (unitSystem.weightUnits === Weight.KG) sinkerBarWeight *= 0.45;

    return sinkerBarWeight;
  }

  return {
    balanceWeight: balanceWeightCalc(),
    finalWeight: finalWeightCalc(),
    sinkerBarWeight: sinkerBarWeightCalc(),
  };
};
