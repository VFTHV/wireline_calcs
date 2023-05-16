import NavHeader from '../components/NavHeader';
import TableRow from '../components/TableRow';
import InputData from '../components/InputData';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeToolWeight,
  changeDepth,
  changeEnvironment,
} from '../store/slices/weakPointSlice';
import { StoreState } from '../store';
import { WirelineCalcs } from '../logics/wirelineCalcs';
import { Environment } from '../store/slices/types';
import RadioDualInput from '../components/RadioDualInput';
import CableSelector from '../components/CableSelector';
import CurrentCableSpecs from '../components/CurrentCableSpecs';

const WeakPoint = () => {
  const dispatch = useDispatch();
  const { currentCable, toolWeight, depth, environment } = useSelector(
    (state: StoreState) => state.weakPoint
  );
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);

  const calcData = new WirelineCalcs(
    currentCable,
    depth,
    environment,
    unitSystem,
    toolWeight
  );

  return (
    <>
      <NavHeader>Weakpoint</NavHeader>
      <CableSelector />
      <RadioDualInput
        values={[Environment.FLUID, Environment.GAS]}
        onChange={(e) => dispatch(changeEnvironment(e.target.value))}
        currentValue={environment}
      />
      <CurrentCableSpecs />
      <InputData
        onChange={(e) => dispatch(changeToolWeight(+e.target.value))}
        nameId="weight"
        value={toolWeight}
        unit={unitSystem.weightUnits}
      >
        Toolstring Weight:
      </InputData>
      <InputData
        onChange={(e) => dispatch(changeDepth(+e.target.value))}
        nameId="depth"
        value={depth}
        unit={unitSystem.depthUnits}
      >
        Depth:
      </InputData>
      <table className="table">
        <tbody>
          <TableRow
            data={calcData.cableWeight()}
            units={unitSystem.weightUnits}
          >
            TOTAL CABLE WEIGHT
          </TableRow>
          <TableRow
            data={calcData.maxWPstrength()}
            units={unitSystem.weightUnits}
          >
            MAX WEAKPOINT STRENGTH
          </TableRow>
          <TableRow data={calcData.outersRehead()} units="">
            NUMBER OF OUTER WIRES
          </TableRow>
          <TableRow data={calcData.toolWeightVsWeakpt()} units="%">
            TOOL WEIGHT % OF WEAKPOINT
          </TableRow>
        </tbody>
      </table>
    </>
  );
};

export default WeakPoint;
