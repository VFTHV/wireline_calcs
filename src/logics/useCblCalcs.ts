import { PipeSpecs } from '../database/casingsTubings';

interface CBLTool {
  od: number;
  id: number;
}

interface CBLTools {
  1.69: CBLTool;
  2.75: CBLTool;
  3.375: CBLTool;
  4.5: CBLTool;
}
// find out the id of 4.5 tool
// or play with tools id to match table Travel Time
export const cblTools: CBLTools = {
  1.69: { od: 1.6875, id: 0.89 },
  2.75: { od: 2.75, id: 1.45 },
  3.375: { od: 3.375, id: 1.8 },
  4.5: { od: 4.5, id: 4 },
};

export const useCblCalcs = (
  csg: PipeSpecs,
  toolOd: keyof CBLTools
): { ppt3ft: number; ppt5ft: number } => {
  const dTsilicone = 226;
  const dTfrWater = 205.9;
  const dTcsg = 57;

  const { od, id } = cblTools[toolOd];

  const ttTool: number = (dTsilicone * ((od - id) / 2)) / 12;

  // create validation: if csg id is smaller than (tool OD + certain value),

  const normalDistance = ((csg.id - cblTools[toolOd].od) * 0.5) / 12;
  // FLUID calcs
  const asin = Math.asin(dTcsg / dTfrWater);
  const angle = Math.atan(asin);
  // const degrees = (angle * 180) / Math.PI;
  const fluidPath = normalDistance / Math.cos(angle);
  const ttFluid = fluidPath * dTfrWater;

  // CASING calcs
  const csgReduction = normalDistance * Math.tan(angle);

  const csg3ftPath = 3 - csgReduction * 2;
  const ttCsg3ft = dTcsg * csg3ftPath;
  const ppt3ft = 2 * ttTool + ttCsg3ft + 2 * ttFluid;

  const csg5ftPath = 5 - csgReduction * 2;
  const ttCsg5ft = dTcsg * csg5ftPath;
  const ppt5ft = 2 * ttTool + ttCsg5ft + 2 * ttFluid;
  console.log('ppt3ft: ', ppt3ft);
  console.log('ppt5ft: ', ppt5ft);

  return { ppt3ft, ppt5ft };
};
