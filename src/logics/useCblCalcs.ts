import { PipeSpecs } from '../database/casingsTubings';

// find out the id of 4.5 tool
// or play with tools id to match table Travel Time

export const useCblCalcs = (
  csg: PipeSpecs | undefined,
  toolOd: number
): { ppt3ft: number; ppt5ft: number } | undefined => {
  if (!csg || !toolOd || csg.od < toolOd * 1.43) return;
  const dTsilicone = 226;
  const dTfrWater = 205.9;
  const dTcsg = 57;

  const toolId = 0.53 * toolOd;

  const ttTool: number = (dTsilicone * ((toolOd - toolId) / 2)) / 12;

  // create validation: if csg id is smaller than (tool OD + certain value),

  const normalDistance = ((csg.id - toolOd) * 0.5) / 12;
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
  const ppt3ft = Math.round(2 * ttTool + ttCsg3ft + 2 * ttFluid);

  const csg5ftPath = 5 - csgReduction * 2;
  const ttCsg5ft = dTcsg * csg5ftPath;
  const ppt5ft = Math.round(2 * ttTool + ttCsg5ft + 2 * ttFluid);
  console.log('ppt3ft: ', ppt3ft);
  console.log('ppt5ft: ', ppt5ft);

  return { ppt3ft, ppt5ft };
};
