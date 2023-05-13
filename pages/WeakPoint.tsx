import NavHeader from '../src/components/NavHeader';
import TableRow from '../src/components/TableRow';
import InputData from '../src/components/InputData';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeToolWeight,
  changeDepth,
  changeEnvironment,
} from '../store/slices/weakPointSlice';
import { StoreState } from '../store';
import { WirelineCalcs } from '../logics/wirelineCalcs';
import { Environment } from '../store/slices/types';
import RadioDualInput from '../src/components/RadioDualInput';
import CableSelector from '../src/components/CableSelector';

const WeakPoint = () => {
  const dispatch = useDispatch();
  const { currentCable, toolWeight, depth, environment } = useSelector(
    (state: StoreState) => state.weakPoint
  );

  const calcData = new WirelineCalcs(
    currentCable,
    depth,
    environment,
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
      <table>
        <tbody className="table">
          <TableRow data={currentCable?.breakingStrength} units="lbs">
            CABLE BREAKING STRENGTH
          </TableRow>
          <TableRow data={currentCable?.outerArmorBS} units="lbs">
            OUTER ARMOR BREAKING STRENGTH
          </TableRow>
          <TableRow data={currentCable?.weightInAir} units="lbs">
            AVG. CABLE WEIGHT IN AIR
          </TableRow>
          <TableRow data={currentCable?.maxTension} units="lbs">
            MAX. RECOMMENDED TENSION
          </TableRow>
        </tbody>
      </table>
      <InputData
        onChange={(e) => dispatch(changeToolWeight(+e.target.value))}
        nameId="weight"
        value={toolWeight}
        unit="lbs"
      >
        Toolstring Weight:
      </InputData>
      <InputData
        onChange={(e) => dispatch(changeDepth(+e.target.value))}
        nameId="depth"
        value={depth}
        unit="ft"
      >
        Depth:
      </InputData>
      <table>
        <tbody className="table">
          <TableRow data={calcData.cableWeight()} units="lbs">
            TOTAL CABLE WEIGHT
          </TableRow>
          <TableRow data={calcData.maxWPstrength()} units="lbs">
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
