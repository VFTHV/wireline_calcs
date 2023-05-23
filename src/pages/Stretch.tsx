import { useState } from 'react';
import CableSelector from '../components/CableSelector';
import NavHeader from '../components/NavHeader';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../store';
import InputData from '../components/InputData';
import { changeDepth } from '../store';
import TableRow from '../components/TableRow';
import { useStretchCalc } from '../logics/useStretchCalc';

const Stretch = () => {
  const [tension, setTension] = useState<number>(0);

  const { stretchCoeff, depth, weightUnits, depthUnits, unitSystem } =
    useSelector((store: StoreState) => {
      const { stretchCoeff } = store.weakPoint.currentCable;
      const depth = store.weakPoint.depth;
      const { weightUnits, depthUnits } = store.unitSystem;
      const unitSystem = store.unitSystem;
      return { stretchCoeff, depth, weightUnits, depthUnits, unitSystem };
    });

  const dispatch = useDispatch();

  const stretch = useStretchCalc(depth, tension, stretchCoeff, unitSystem);

  return (
    <>
      <NavHeader>Stretch</NavHeader>
      <CableSelector />
      <table className="table">
        <tbody>
          <TableRow data={stretchCoeff} units={depthUnits}>
            CABLE STRETCH / (1Kft*1Klbs)
          </TableRow>
        </tbody>
      </table>
      <InputData
        typeId={'maxTension'}
        unit={weightUnits}
        value={tension}
        onChange={(e) => setTension(+e.target.value)}
      >
        Current Tension:
      </InputData>
      <InputData
        onChange={(e) => dispatch(changeDepth(+e.target.value))}
        typeId={'depth'}
        value={depth}
        unit={depthUnits}
      >
        Depth:
      </InputData>
      <table className="table">
        <tbody>
          <TableRow data={stretch} units={depthUnits}>
            TOTAL CABLE STRETCH
          </TableRow>
        </tbody>
      </table>
    </>
  );
};

export default Stretch;
