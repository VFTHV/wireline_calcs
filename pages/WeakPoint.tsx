import { cablesData } from '../database/cables';
import NavHeader from '../src/components/NavHeader';
import TableRow from '../src/components/TableRow';
import InputData from '../src/components/InputData';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeCableType,
  changeToolWeight,
  changeDepth,
  changeEnvironment,
} from '../store/slices/weakPointSlice';
import { StoreState } from '../store';
import { WirelineCalcs } from '../logics/wirelineCalcs';
import { Environment } from '../store/slices/types';

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
  console.log(currentCable?.outers);
  return (
    <>
      <NavHeader>Weakpoint</NavHeader>
      <div className="input-group">
        <label htmlFor="cable">Cable Type:</label>
        <select
          className="select-item"
          id="cable"
          name="cable"
          value={currentCable?.type}
          onChange={(e) => dispatch(changeCableType(e.target.value))}
        >
          <option value={''}>select</option>
          {cablesData.map((cable) => {
            return (
              <option key={cable.type} value={cable.type}>
                {cable.type}
              </option>
            );
          })}
        </select>
      </div>

      <form>
        <div className="radio-container">
          <label>
            <input
              type="radio"
              name="fluid"
              value={Environment.FLUID}
              onChange={(e) => dispatch(changeEnvironment(e.target.value))}
              checked={environment === Environment.FLUID}
            />
            <div className="left label-container">FLUID</div>
          </label>
          <label>
            <input
              type="radio"
              name="gas"
              value={Environment.GAS}
              onChange={(e) => dispatch(changeEnvironment(e.target.value))}
              checked={environment === Environment.GAS}
            />
            <div className="label-container right">GAS</div>
          </label>
        </div>
      </form>

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
