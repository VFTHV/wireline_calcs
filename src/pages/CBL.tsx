import { useState } from 'react';
import {
  InputData,
  NavHeader,
  PipeSelector,
  PipeSpecsDisplay,
  TableRow,
} from '../components';
import { casingData } from '../database/casingsTubings';
import { useCblCalcs } from '../logics/useCblCalcs';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { DiameterUnits } from '../store/slices/types';

export const CBL = () => {
  const [toolOd, setToolOd] = useState<number>(0);
  const { casing } = useSelector((store: StoreState) => store.cbl);
  const { microSecUnits } = useSelector(
    (store: StoreState) => store.unitSystem
  );
  console.clear();

  const ppt = useCblCalcs(casing, toolOd);

  const renderPPT = () => {
    if (!casing || !toolOd) return;

    if (casing.od < toolOd * 1.43) {
      return <>THIS CASING SIZE IS OUTSIDE OF TOOL'S OPERATING RANGE</>;
    }

    return (
      <table className="table">
        <tbody>
          <TableRow data={ppt?.ppt3ft} units={microSecUnits}>
            3ft Predicted Pipe Time
          </TableRow>
        </tbody>

        <tbody>
          <TableRow data={ppt?.ppt5ft} units={microSecUnits}>
            5ft Predicted Pipe Time
          </TableRow>
        </tbody>
      </table>
    );
  };

  return (
    <>
      <NavHeader>Cement Bond Log Calcs</NavHeader>
      <PipeSelector pipeData={casingData} typeId="casing" />

      <InputData
        onChange={(e) => setToolOd(+e.target.value)}
        value={toolOd}
        typeId="toolOd"
        unit={DiameterUnits.INCH}
        placeholder='E.g. 1-11/16" is 1.69" or 43 mm'
      >
        Enter CBL tool OD
      </InputData>
      {/* add fluid  selector */}
      <PipeSpecsDisplay typeId="casing" specs={['id']} pipeThck />
      {renderPPT()}
    </>
  );
};
