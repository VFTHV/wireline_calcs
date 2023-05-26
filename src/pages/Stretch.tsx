import { useState } from 'react';
import CableSelector from '../components/CableSelector';
import NavHeader from '../components/NavHeader';
import { useSelector, useDispatch } from 'react-redux';
import InputData from '../components/InputData';
import { changeDepth, StoreState } from '../store';
import TableRow from '../components/TableRow';
import { useStretchCalc } from '../logics/useStretchCalc';
import CurrentCableSpecs from '../components/CurrentCableSpecs';
import CableManualEntrance from '../components/CableManualEntrance';

const Stretch = () => {
  const [tension, setTension] = useState<number>(0);

  const { currentCable, depth, unitSystem } = useSelector(
    (state: StoreState) => {
      const { currentCable, depth } = state.weakPoint;
      const { unitSystem } = state;
      return { currentCable, depth, unitSystem };
    }
  );

  const dispatch = useDispatch();

  const stretch = useStretchCalc(
    depth,
    tension,
    currentCable.stretchCoeff,
    unitSystem
  );

  return (
    <>
      <NavHeader>Cable Stretch Calculator</NavHeader>
      <CableSelector />
      {currentCable.type === 'MANUAL' ? (
        <CableManualEntrance specs={['stretchCoeff']} />
      ) : (
        <CurrentCableSpecs specs={['stretchCoeff']} />
      )}
      <InputData
        typeId={'maxTension'}
        unit={unitSystem.weightUnits}
        value={tension}
        onChange={(e) => setTension(+e.target.value)}
      >
        Current Tension:
      </InputData>
      <InputData
        onChange={(e) => dispatch(changeDepth(+e.target.value))}
        typeId={'depth'}
        value={depth}
        unit={unitSystem.depthUnits}
      >
        Depth:
      </InputData>
      <table className="table">
        <tbody>
          <TableRow data={stretch} units={unitSystem.depthUnits}>
            TOTAL CABLE STRETCH
          </TableRow>
        </tbody>
      </table>
    </>
  );
};

export default Stretch;
