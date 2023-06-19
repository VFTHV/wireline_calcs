import {
  NavHeader,
  CableSelector,
  CurrentCableSpecs,
  CableManualEntrance,
  InputData,
  TableRow,
  RadioDualInput,
} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import {
  StoreState,
  changeDepth,
  changeEnvironment,
  changePercetPull,
  changeOutersUsed,
  changeInnersUsed,
} from '../store';
import { useMaxPullCalc } from '../logics/useMaxPullCalc';
import { EnvironmentUnits } from '../store/slices/types';

export const MaxPull = () => {
  const { unitSystem } = useSelector((state: StoreState) => state);
  const { depth, environment, currentCable } = useSelector(
    (state: StoreState) => state.weakPoint
  );
  const { percentPull, outersUsed, innersUsed } = useSelector(
    (state: StoreState) => state.maxPull
  );
  const dispatch = useDispatch();

  const { maxPull, conservativePull } = useMaxPullCalc(
    depth,
    percentPull,
    outersUsed,
    innersUsed,
    currentCable,
    environment,
    unitSystem
  );

  return (
    <>
      <NavHeader>Max. Tension at Depth</NavHeader>
      <CableSelector />
      {currentCable.type === 'MANUAL' ? (
        <CableManualEntrance
          specs={['outerArmorBS', 'innerArmorBS', 'weightInAir']}
        />
      ) : (
        <CurrentCableSpecs
          specs={['maxTension', 'outerArmorBS', 'innerArmorBS', 'weightInAir']}
        />
      )}

      <RadioDualInput
        values={[EnvironmentUnits.FLUID, EnvironmentUnits.GAS]}
        onChange={(e) => dispatch(changeEnvironment(e.target.value))}
        currentValue={environment}
      />

      <InputData
        onChange={(e) => dispatch(changeDepth(+e.target.value))}
        typeId={'depth'}
        value={depth}
        unit={unitSystem.depthUnits}
      >
        Depth:
      </InputData>
      <InputData
        value={outersUsed}
        unit=""
        onChange={(e) => dispatch(changeOutersUsed(+e.target.value))}
        typeId={'outersUsed'}
      >
        Number of Outer Armors Used
      </InputData>
      <InputData
        value={innersUsed}
        unit=""
        onChange={(e) => dispatch(changeInnersUsed(+e.target.value))}
        typeId={'outersUsed'}
      >
        Number of Inner Armors Used
      </InputData>
      <InputData
        value={percentPull}
        unit="%"
        onChange={(e) => dispatch(changePercetPull(+e.target.value))}
        typeId={'overBalance'}
      >
        Percent of Weak Point Breaking Strength
      </InputData>
      <table className="table">
        <tbody>
          <TableRow data={conservativePull} units={unitSystem.weightUnits}>
            {percentPull && depth
              ? `Conservative ${percentPull} % WP pull @ ${depth} ${unitSystem.depthUnits}`
              : 'Conservative pull'}
          </TableRow>
          <TableRow data={maxPull} units={unitSystem.weightUnits}>
            {percentPull && depth
              ? `Max ${percentPull} % WP pull @ ${depth} ${unitSystem.depthUnits}`
              : 'Max pull'}
          </TableRow>
        </tbody>
      </table>
    </>
  );
};
