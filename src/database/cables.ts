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
  // add armors in cone - max rehead wires ???
  // in max number of armors to rehead should not exceed it
}

export const cablesData: CableSpecs[] = [
  {
    type: '1N10 (1/10")',
    diameter: 0.101,
    stretchCoeff: 13.1,
    breakingStrength: 1000,
    maxTension: 500,
    conuctorResistance: 21,
    inners: 12,
    outers: 18,
    innerArmorBS: 42,
    outerArmorBS: 42,
    weightInAir: 19,
  },
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
  {
    type: '1N29 (9/32")',
    diameter: 0.288,
    stretchCoeff: 1.55,
    breakingStrength: 10200,
    maxTension: 5100,
    conuctorResistance: 2.8,
    inners: 12,
    outers: 18,
    innerArmorBS: 393,
    outerArmorBS: 393,
    weightInAir: 157,
  },
  {
    type: '1Q29-EHS-LT (9/32")',
    diameter: 0.289,
    stretchCoeff: 1.8,
    breakingStrength: 10200,
    maxTension: 6500,
    conuctorResistance: 2.9,
    inners: 10,
    outers: 24,
    innerArmorBS: 602,
    outerArmorBS: 236,
    weightInAir: 162,
  },
  {
    type: '1N32 (5/16")',
    diameter: 0.322,
    stretchCoeff: 1.2,
    breakingStrength: 12000,
    maxTension: 6000,
    conuctorResistance: 2.8,
    inners: 12,
    outers: 18,
    innerArmorBS: 442,
    outerArmorBS: 442,
    weightInAir: 194,
  },
  {
    type: '1N32-EEHS (5/16")',
    diameter: 0.322,
    stretchCoeff: 1.2,
    breakingStrength: 14750,
    maxTension: 7375,
    conuctorResistance: 2.8,
    inners: 12,
    outers: 18,
    innerArmorBS: 564,
    outerArmorBS: 564,
    weightInAir: 194,
  },
  {
    type: '1Q32-EEHS-LT (5/16")',
    diameter: 0.323,
    stretchCoeff: 1.35,
    breakingStrength: 16000,
    maxTension: 10000,
    conuctorResistance: 2.4,
    inners: 11,
    outers: 24,
    innerArmorBS: 769,
    outerArmorBS: 342,
    weightInAir: 199,
  },
];