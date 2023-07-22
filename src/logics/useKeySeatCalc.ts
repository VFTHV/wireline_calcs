import { useConvertUnits } from './useConvertUnits';
import { UnitSystemState } from '../store';

const { revertToEnglish } = useConvertUnits();

export const useKeySeatCalc = (
  diffStretch: number,
  diffTen: number,
  stretchCoeff: number,
  unitSystem: UnitSystemState
): number => {
  const convTension = revertToEnglish(diffTen, unitSystem.weightUnits);
  const convStretch = revertToEnglish(diffStretch, unitSystem.depthUnits);
  const stuckDepth = (convStretch / (convTension * stretchCoeff)) * 10 ** 6;
  return Math.round(stuckDepth);
};
