import { useState } from 'react';
import {
  NavHeader,
  CableSelector,
  CurrentCableSpecs,
  CableManualEntrance,
  InputData,
  TableRow,
  RadioDualInput,
} from '../components/AllComponents';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState, changeDepth, changeEnvironment } from '../store';
import { useMaxPullCalc } from '../logics/useMaxPullCalc';
import { EnvironmentUnits } from '../store/slices/types';

export const TensionAtDepth = () => {
  const { currentCable } = useSelector((state: StoreState) => state.weakPoint);
  const { unitSystem } = useSelector((state: StoreState) => state);
  const { depth, environment } = useSelector(
    (state: StoreState) => state.weakPoint
  );
  const dispatch = useDispatch();

  const [percentPull, setPercentPull] = useState<number>(0);
  const [outersUsed, setOutersUsed] = useState<number>(0);

  const { maxPull, conservativeMaxPull } = useMaxPullCalc(
    depth,
    percentPull,
    outersUsed,
    currentCable,
    environment,
    unitSystem
  );

  return (
    <>
      <NavHeader>Max. Tension at Depth</NavHeader>
      <CableSelector />
      {currentCable.type === 'MANUAL' ? (
        <CableManualEntrance specs={['outerArmorBS', 'weightInAir']} />
      ) : (
        <CurrentCableSpecs specs={['outerArmorBS', 'weightInAir']} />
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
        onChange={(e) => setOutersUsed(+e.target.value)}
        typeId={'outersUsed'}
      >
        Number of Outer Armors Used
      </InputData>
      <InputData
        value={percentPull}
        unit="%"
        onChange={(e) => setPercentPull(+e.target.value)}
        typeId={'overBalance'}
      >
        Percent of Weak Point Breaking Strength
      </InputData>
      <table className="table">
        <tbody>
          <TableRow data={conservativeMaxPull} units={unitSystem.weightUnits}>
            Conservative Max Tension
          </TableRow>
          <TableRow data={maxPull} units={unitSystem.weightUnits}>
            Max Tension
          </TableRow>
        </tbody>
      </table>
    </>
  );
};
