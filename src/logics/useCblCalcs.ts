import { PipeSpecs } from '../database/casingsTubings';

interface CBLTool {
  od: number;
  id: number;
}

interface CBLTools {
  1.69: CBLTool;
  2.75: CBLTool;
  4.5: CBLTool;
}
// find out the id of 4.5 tool
const cblTools: CBLTools = {
  1.69: { od: 1.6875, id: 1.5 },
  2.75: { od: 2.75, id: 2 },
  4.5: { od: 4.5, id: 4 },
};

export const useCblCalcs = (csg: PipeSpecs, toolOd: keyof CBLTools): number => {
  const dTsilicone = 226;
  const dTfrWater = 203;

  const { od, id } = cblTools[toolOd];

  const dTtool: number = (dTsilicone * ((od - id) / 2)) / 12;
  console.log(dTtool);

  // const dTcsg;

  // const dTfluid;

  // const ppt = 2 * dTtool + dTcsg + 2 * dTfluid;
  return 1;
};
