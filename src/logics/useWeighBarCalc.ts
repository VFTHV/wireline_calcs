import { UnitSystemState } from '../store';
import { useConvertUnits } from './useConvertUnits';

const { revertToEnglish, convertToMetric } = useConvertUnits();

export const useWeightBarCalc = (
  diameter: number,
  pressure: number,
  toolWeight: number,
  percentOverBalance: number,
  units: UnitSystemState
) => {
  function balanceWeightCalc() {
    // converting inputs to English
    const convPressure = revertToEnglish(pressure, units.pressureUnits);
    const convDiameter = revertToEnglish(diameter, units.diameterUnits);

    let balanceWeight = (convPressure * Math.PI * convDiameter ** 2) / 4;
    // converting output
    balanceWeight = convertToMetric(balanceWeight, units.weightUnits);
    return Math.round(balanceWeight);
  }

  function finalWeightCalc() {
    const multiplier = 1 + percentOverBalance / 100;

    // converting inputs to English
    const convPressure = revertToEnglish(pressure, units.pressureUnits);
    const convDiameter = revertToEnglish(diameter, units.diameterUnits);

    const balanceWeight = (convPressure * Math.PI * convDiameter ** 2) / 4;
    let finalWeight = balanceWeight * multiplier;
    // converting output
    finalWeight = convertToMetric(finalWeight, units.weightUnits);
    return Math.round(finalWeight);
  }

  function sinkerBarWeightCalc() {
    const multiplier = 1 + percentOverBalance / 100;

    // converting inputs to English
    const convPressure = revertToEnglish(pressure, units.pressureUnits);
    const convDiameter = revertToEnglish(diameter, units.diameterUnits);

    const balanceWeight = (convPressure * Math.PI * convDiameter ** 2) / 4;
    const finalWeight = balanceWeight * multiplier;
    let sinkerBarWeight = finalWeight - toolWeight;

    // converting output
    sinkerBarWeight = convertToMetric(sinkerBarWeight, units.weightUnits);
    return Math.round(sinkerBarWeight);
  }

  return {
    balanceWeight: balanceWeightCalc(),
    finalWeight: finalWeightCalc(),
    sinkerBarWeight: sinkerBarWeightCalc(),
  };
};
