import {
  changeOuterBS,
  changeWeightInAir,
  changeMaxTension,
  StoreState,
} from '../store';
import { useDispatch, useSelector } from 'react-redux';
import InputData from './InputData';

const CableManualEntrance = () => {
  const dispatch = useDispatch();
  const { outerArmorBS, weightInAir, maxTension } = useSelector(
    (state: StoreState) => state.weakPoint.currentCable
  );
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);

  return (
    <>
      <InputData
        onChange={(e) => dispatch(changeOuterBS(+e.target.value))}
        typeId={'outerBS'}
        value={outerArmorBS}
        unit={unitSystem.weightUnits}
      >
        OUTER BREAKING STRENGTH
      </InputData>
      <InputData
        onChange={(e) => dispatch(changeWeightInAir(+e.target.value))}
        typeId={'weightInAir'}
        value={weightInAir}
        unit={unitSystem.weightUnits}
      >
        WEIGHT IN AIR
      </InputData>
      <InputData
        onChange={(e) => dispatch(changeMaxTension(+e.target.value))}
        typeId={'maxTension'}
        value={maxTension}
        unit={unitSystem.weightUnits}
      >
        MAX. RECOMMENDED TENSION
      </InputData>
    </>
  );
};

export default CableManualEntrance;
