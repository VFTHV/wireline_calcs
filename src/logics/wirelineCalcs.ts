import { CableSpecs } from '../database/cables';
import { Environment, Depth, Weight } from '../store/slices/types';
import { UnitSystemState } from '../store/slices/unitSystemSlice';

export class WirelineCalcs {
  constructor(
    public currenCable: CableSpecs | undefined,
    public depth: number,
    public environment: 'fluid' | 'gas',
    public unitSystem: UnitSystemState,
    public toolWeight?: number
  ) {}
  // at the end of every function, check if for example units.weightUnits === Weight.LBS
  // then return as it is, otherwise convert at return converted

  cableWeight(): number {
    if (!this.currenCable) return 0;
    // converting inputs to English
    if (this.unitSystem.depthUnits === Depth.M) this.depth /= 0.3048;

    let envCoeff = 1;
    if (this.environment === Environment.FLUID) envCoeff = 0.83;

    let cableWeight = Math.round(
      envCoeff * this.currenCable.weightInAir * (this.depth / 1000)
    );
    // converting output
    if (this.unitSystem.weightUnits === Weight.KG) {
      cableWeight *= 0.45;
    }
    return cableWeight;
  }

  maxWPstrength(): number {
    if (!this.currenCable || !this.cableWeight()) return 0;
    let cableWeight = this.cableWeight();
    // converting input to English
    if (this.unitSystem.weightUnits === Weight.KG) cableWeight /= 0.45;
    let maxWPstrength = Math.round(
      this.currenCable.maxTension - this.cableWeight()
    );
    // converting output
    if (this.unitSystem.weightUnits === Weight.KG) maxWPstrength *= 0.45;
    return maxWPstrength;
  }

  outersRehead(): number {
    if (!this.currenCable) return 0;

    let maxWPstrength = this.maxWPstrength();
    // converting input to English
    if (this.unitSystem.weightUnits === Weight.KG) maxWPstrength /= 0.45;

    let outersRehead = this.maxWPstrength() / this.currenCable.outerArmorBS;
    // add armors in cone - max rehead wires ???
    // in max number of armors to rehead should not exceed it
    if (outersRehead > this.currenCable.outers) {
      outersRehead = this.currenCable.outers;
    }
    return +outersRehead.toFixed(1);
  }

  toolWeightVsWeakpt(): number | string {
    if (!this.toolWeight || !this.maxWPstrength()) return 0;
    const toolWeightVsWeakpt = Math.round(
      (this.toolWeight / this.maxWPstrength()) * 100
    );
    const danger = toolWeightVsWeakpt > 50 ? 'risk ' : '';
    return danger + +toolWeightVsWeakpt;
  }
}
