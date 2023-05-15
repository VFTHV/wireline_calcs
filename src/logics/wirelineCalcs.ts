import { CableSpecs } from '../src/database/cables';
import { Environment, UnitSystem } from '../store/slices/types';

export class WirelineCalcs {
  constructor(
    public currenCable: CableSpecs | undefined,
    public depth: number,
    public environment: Environment,
    public units: UnitSystem,
    public toolWeight?: number
  ) {}

  cableWeight(): number {
    if (!this.currenCable) return 0;
    let envCoeff = 1;
    let depthCoeff = 1;
    if (this.environment === Environment.FLUID) envCoeff = 0.83;
    if (this.units === UnitSystem.METRIC) depthCoeff = 1 / 0.3048;
    const cableWeight =
      envCoeff *
      this.currenCable.weightInAir *
      ((this.depth * depthCoeff) / 1000);
    return +cableWeight.toFixed();
  }

  maxWPstrength(): number {
    if (!this.currenCable || !this.cableWeight()) return 0;
    const maxWPstrength = this.currenCable.maxTension - this.cableWeight();
    return +maxWPstrength.toFixed();
  }

  outersRehead(): number {
    if (!this.currenCable) return 0;
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
    const toolWeightVsWeakpt = (this.toolWeight / this.maxWPstrength()) * 100;
    const danger = toolWeightVsWeakpt > 50 ? 'risk ' : '';
    return danger + +toolWeightVsWeakpt.toFixed();
  }
}
