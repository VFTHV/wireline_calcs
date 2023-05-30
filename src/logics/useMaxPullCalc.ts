import { CableSpecs } from '../database/cables';
import { UnitSystemState } from '../store';
import { EnvironmentType } from '../store/slices/types';
import { useConvertUnits } from './useConvertUnits';

const { revertToEnglish } = useConvertUnits();

export const useMaxPullCalc = (
  depth: number,
  percentPull: number,
  outersUsed: number,
  currentCable: CableSpecs,
  environment: EnvironmentType,
  units: UnitSystemState
) => {
  function maxPull(): number {
    if (!outersUsed || !percentPull) return 0;
    const envCoeff = environment === 'fluid' ? 0.83 : 1;
    const convDepth = revertToEnglish(depth, units.depthUnits);

    const cableWeight =
      (currentCable.weightInAir * convDepth * envCoeff) / 1000;
    const weakPointPull =
      (outersUsed * currentCable.outerArmorBS * percentPull) / 100;
    // add danger message if more than currentCable.maxtension
    return Math.floor(cableWeight + weakPointPull);
  }

  function conservativeMaxPull(): number {
    if (!outersUsed || !percentPull) return 0;
    const envCoeff = environment === 'fluid' ? 0.83 : 1;
    const convDepth = revertToEnglish(depth, units.depthUnits);

    const cableWeight =
      (currentCable.weightInAir * convDepth * envCoeff) / 1000;
    const weakPointPull =
      (0.8 * outersUsed * currentCable.outerArmorBS * percentPull) / 100;
    return Math.floor(cableWeight + weakPointPull);
  }

  return { maxPull: maxPull(), conservativeMaxPull: conservativeMaxPull() };
};
