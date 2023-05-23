import { useState } from 'react';
import CableSelector from '../components/CableSelector';
import NavHeader from '../components/NavHeader';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../store';
import InputData from '../components/InputData';
import { changeDepth } from '../store';
import TableRow from '../components/TableRow';

const Stretch = () => {
  const [tension, setTension] = useState<number>(0);

  const { breakingStrength, depth, weightUnits, depthUnits } = useSelector(
    (store: StoreState) => {
      const { breakingStrength } = store.weakPoint.currentCable;
      const depth = store.weakPoint.depth;
      const { weightUnits, depthUnits } = store.unitSystem;
      return { breakingStrength, depth, weightUnits, depthUnits };
    }
  );
  const dispatch = useDispatch();

  return (
    <>
      <NavHeader>Stretch</NavHeader>
      <CableSelector />

      <table className="table">
        <tbody>
          <TableRow data={breakingStrength} units={weightUnits}>
            CABLE BREAKING STRENGTH
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
    </>
  );
};

export default Stretch;
