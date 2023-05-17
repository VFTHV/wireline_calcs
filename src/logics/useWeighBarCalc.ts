import { Diameter, Pressure, Weight } from '../store/slices/types';
import { UnitSystemState } from '../store';

export const useWeightBarCalc = (
  diameter: number,
  pressure: number,
  toolWeight: number,
  percentOverBalance: number
) => {
  function balanceWeightCalc() {
    const balanceWeight = Math.round((pressure * Math.PI * diameter ** 2) / 4);
    return balanceWeight;
  }

  function finalWeightCalc() {
    const multiplier = 1 + percentOverBalance / 100;
    const balanceWeight = (pressure * Math.PI * diameter ** 2) / 4;
    const finalWeight = Math.round(balanceWeight * multiplier);
    return finalWeight;
  }

  function sinkerBarWeightCalc() {
    const multiplier = 1 + percentOverBalance / 100;
    const balanceWeight = (pressure * Math.PI * diameter ** 2) / 4;
    const finalWeight = balanceWeight * multiplier;
    const sinkerBarWeight = Math.round(finalWeight - toolWeight);
    return sinkerBarWeight;
  }

  return {
    balanceWeight: balanceWeightCalc(),
    finalWeight: finalWeightCalc(),
    sinkerBarWeight: sinkerBarWeightCalc(),
  };
};
