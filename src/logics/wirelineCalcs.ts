import { CableSpecs } from '../database/cables';
import { Environment, Depth, Weight } from '../store/slices/types';
import { UnitSystemState } from '../store';

export class WirelineCalcs {
  constructor(
    public currenCable: CableSpecs | undefined,
    public depth: number,
    public environment: 'fluid' | 'gas',
    public unitSystem: UnitSystemState,
    public toolWeight?: number
  ) {}

  cableWeight(): number {
    if (!this.currenCable) return 0;
    // converting inputs to English
    let depth = this.depth;
    if (this.unitSystem.depthUnits === Depth.M) depth /= 0.3048;

    let envCoeff = 1;
    if (this.environment === Environment.FLUID) envCoeff = 0.83;

    let cableWeight = Math.round(
      envCoeff * this.currenCable.weightInAir * (depth / 1000)
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
    let maxWPstrength = Math.round(this.currenCable.maxTension - cableWeight);
    // converting output

    if (this.unitSystem.weightUnits === Weight.KG) maxWPstrength *= 0.45;
    return maxWPstrength;
  }

  outersRehead(): number {
    if (!this.currenCable) return 0;

    let maxWPstrength = this.maxWPstrength();
    // converting input to English
    if (this.unitSystem.weightUnits === Weight.KG) maxWPstrength /= 0.45;
    let outersRehead = maxWPstrength / this.currenCable.outerArmorBS;
    // add armors in cone - max rehead wires ???
    // in max number of armors to rehead should not exceed it
    if (outersRehead > this.currenCable.outers) {
      outersRehead = this.currenCable.outers;
    }
    return +outersRehead.toFixed(1);
  }

  toolWeightVsWeakpt(): number | string {
    if (!this.toolWeight || !this.maxWPstrength()) return 0;
    let toolWeight = this.toolWeight;
    let maxWPstrength = this.maxWPstrength();
    if (this.unitSystem.weightUnits === Weight.KG) {
      toolWeight /= 0.45;
      maxWPstrength /= 0.45;
    }

    const toolWeightVsWeakpt = Math.round((toolWeight / maxWPstrength) * 100);
    const danger = toolWeightVsWeakpt > 50 ? 'risk ' : '';
    return danger + +toolWeightVsWeakpt;
  }
}
