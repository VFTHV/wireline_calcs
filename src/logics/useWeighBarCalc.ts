export const useWeightBarCalc = () => {
  function balanceWeightCalc(diameter: number, pressure: number) {
    const balanceWeight = Math.round((pressure * Math.PI * diameter ** 2) / 4);
    return balanceWeight;
  }

  function finalWeight(
    diameter: number,
    pressure: number,
    percentOverBalance: number
  ) {
    const multiplier = 1 + percentOverBalance / 100;
    const balanceWeight = (pressure * Math.PI * diameter ** 2) / 4;
    const finalWeight = Math.round(balanceWeight * multiplier);
    return finalWeight;
  }

  function sinkerBarWeight(
    diameter: number,
    pressure: number,
    percentOverBalance: number
  ) {
    const multiplier = 1 + percentOverBalance / 100;
    const balanceWeight = (pressure * Math.PI * diameter ** 2) / 4;
    const finalWeight = balanceWeight * multiplier;
    const sinkerBarWeight = Math.round(finalWeight - balanceWeight);
    return sinkerBarWeight;
  }

  return { balanceWeightCalc, finalWeight, sinkerBarWeight };
};
