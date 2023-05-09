export interface CableSpecs {
  type: string;
  diameter: number;
  stretchCoeff: number;
  breakingStrength: number;
  maxTension: number;
  conuctorResistance: number;
  inners: number;
  outers: number;
  innerArmorBS: number;
  outerArmorBS: number;
  weightInAir: number;
}

export const cablesData: CableSpecs[] = [
  {
    type: '1K22 (7/32")',
    diameter: 0.224,
    stretchCoeff: 2.2,
    breakingStrength: 5600,
    maxTension: 2800,
    conuctorResistance: 4.1,
    inners: 15,
    outers: 15,
    innerArmorBS: 132,
    outerArmorBS: 286,
    weightInAir: 95,
  },
  {
    type: '1N22 (7/32")',
    diameter: 0.224,
    stretchCoeff: 2.5,
    breakingStrength: 5600,
    maxTension: 2800,
    conuctorResistance: 4.1,
    inners: 12,
    outers: 18,
    innerArmorBS: 215,
    outerArmorBS: 215,
    weightInAir: 96,
  },
  {
    type: '1N25 (1/4")',
    diameter: 0.258,
    stretchCoeff: 1.9,
    breakingStrength: 7300,
    maxTension: 3650,
    conuctorResistance: 4.1,
    inners: 12,
    outers: 18,
    innerArmorBS: 286,
    outerArmorBS: 286,
    weightInAir: 125,
  },
];
