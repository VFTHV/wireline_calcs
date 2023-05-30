import {
  NavHeader,
  TableRow,
  InputData,
  RadioDualInput,
  CableSelector,
  CableManualEntrance,
  CurrentCableSpecs,
} from '../components/AllComponents';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeToolWeight,
  changeDepth,
  changeEnvironment,
} from '../store/slices/weakPointSlice';
import { StoreState } from '../store';
import { WirelineCalcs } from '../logics/wirelineCalcs';
import { EnvironmentUnits } from '../store/slices/types';

export const WeakPoint = () => {
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
      {currentCable.type === 'MANUAL' ? (
        <CableManualEntrance
          specs={['outerArmorBS', 'weightInAir', 'maxTension']}
        />
      ) : (
        <CurrentCableSpecs
          specs={[
            'breakingStrength',
            'outerArmorBS',
            'weightInAir',
            'maxTension',
          ]}
        />
      )}
      <RadioDualInput
        values={[EnvironmentUnits.FLUID, EnvironmentUnits.GAS]}
        onChange={(e) => dispatch(changeEnvironment(e.target.value))}
        currentValue={environment}
      />
      <InputData
        onChange={(e) => dispatch(changeToolWeight(+e.target.value))}
        typeId={'toolWeight'}
        value={toolWeight}
        unit={unitSystem.weightUnits}
      >
        Toolstring Weight:
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
