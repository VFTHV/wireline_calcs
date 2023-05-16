import { UnitSystemState } from '../store/slices/unitSystemSlice';
import { Environment, Depth, Diameter, Weight } from '../store/slices/types';
import { CableSpecs } from '../database/cables';

export const useWeakPointCalcs = (
  units: UnitSystemState,
  currenCable: CableSpecs | undefined,
  depth: number,
  environment: 'fluid' | 'gas',
  toolWeight?: number
) => {
  if (units.depthUnits === Depth.M) depth /= 0.3048;
  let envCoeff = 1;
  if (environment === Environment.FLUID) envCoeff = 0.83;
  let cableWeight: number

  function cableWeightCalc(): number {
    if (!currenCable) return 0;
    let calcCableWeight = Math.round(
      envCoeff * currenCable.weightInAir * (depth / 1000)
    );
    if ((units.weightUnits = Weight.KG)) {
      calcCableWeight *= 0.45;
      cableWeight = calcCableWeight
      return calcCableWeight;
    } else {
      cableWeight = calcCableWeight
      return calcCableWeight;
    }
  }

  function 
};
