import InputData from '../components/InputData';
import NavHeader from '../components/NavHeader';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store';
import {
  changeDiameter,
  changePressure,
  changeWeight,
  changePercentOverBalance,
} from '../store';

const WeightBar = () => {
  const dispatch = useDispatch();
  const { diameter, wellPressure, weight, percentOverBalance } = useSelector(
    (state: StoreState) => state.weightBar
  );

  console.log(weight);
  return (
    <>
      <NavHeader>Weight Bar</NavHeader>
      <InputData
        onChange={(e) => dispatch(changeDiameter(e.target.value))}
        nameId="diameter"
        value={diameter}
        unit="in"
      >
        Cable Diameter:
      </InputData>
      <InputData
        onChange={(e) => dispatch(changePressure(e.target.value))}
        nameId="pressure"
        value={wellPressure}
        unit="psi"
      >
        Well Pressure:
      </InputData>
      <InputData
        onChange={(e) => dispatch(changeWeight(e.target.value))}
        nameId="weight"
        value={weight}
        unit="lbs"
      >
        Tool Weight:
      </InputData>
      <InputData
        onChange={(e) => dispatch(changePercentOverBalance(e.target.value))}
        nameId="overBalance"
        value={percentOverBalance}
        unit="%"
      >
        Percent over Balance:
      </InputData>
    </>
  );
};

export default WeightBar;
