import { useConvertUnits } from './useConvertUnits';
import { UnitSystemState } from '../store';

const { revertToEnglish } = useConvertUnits();

export const useStretchCalc = (
  depth: number,
  tension: number,
  stretchCoeff: number,
  unitSystem: UnitSystemState
): number => {
  const convDepth = revertToEnglish(depth, unitSystem.depthUnits) / 1000;
  const convTension = revertToEnglish(tension, unitSystem.weightUnits) / 1000;

  let stretch = convDepth * convTension * stretchCoeff;
  // stretch = convertToMetric(stretch, unitSystem.depthUnits);
  return +stretch.toFixed(2);
};
