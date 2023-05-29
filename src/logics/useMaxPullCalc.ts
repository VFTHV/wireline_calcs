import { CableSpecs } from '../database/cables';
import { EnvironmentType } from '../store/slices/types';

export const useMaxPullCalc = (
  depth: number,
  percentPull: number,
  outersUsed: number,
  currentCable: CableSpecs,
  environment: EnvironmentType
) => {
  function maxPull(): number {
    if (!outersUsed || !percentPull) return 0;
    let envCoeff = environment === 'fluid' ? 0.83 : 1;
    const cableWeight = (currentCable.weightInAir * depth * envCoeff) / 1000;
    const weakPointPull =
      (outersUsed * currentCable.outerArmorBS * percentPull) / 100;
    // add danger message if more than currentCable.maxtension
    return Math.floor(cableWeight + weakPointPull);
  }

  function conservativeMaxPull(): number {
    if (!outersUsed || !percentPull) return 0;
    let envCoeff = environment === 'fluid' ? 0.83 : 1;
    const cableWeight = (currentCable.weightInAir * depth * envCoeff) / 1000;
    const weakPointPull =
      (0.8 * outersUsed * currentCable.outerArmorBS * percentPull) / 100;
    return Math.floor(cableWeight + weakPointPull);
  }

  return { maxPull: maxPull(), conservativeMaxPull: conservativeMaxPull() };
};
