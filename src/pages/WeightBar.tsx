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
import TableRow from '../components/TableRow';
import { useWeightBarCalc } from '../logics/useWeighBarCalc';

const WeightBar = () => {
  const dispatch = useDispatch();
  const { diameter, wellPressure, weight, percentOverBalance } = useSelector(
    (state: StoreState) => state.weightBar
  );
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);

  const { balanceWeightCalc, finalWeight, sinkerBarWeight } =
    useWeightBarCalc();

  return (
    <>
      <NavHeader>Weight Bar</NavHeader>
      <InputData
        onChange={(e) => dispatch(changeDiameter(e.target.value))}
        nameId="diameter"
        value={diameter}
        unit={unitSystem.diameterUnits}
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
        unit={unitSystem.weightUnits}
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
      <table className="table">
        <tbody>
          <TableRow
            data={balanceWeightCalc(diameter, wellPressure)}
            units={unitSystem.weightUnits}
          >
            BALANCE WEIGHT
          </TableRow>
          <TableRow
            data={finalWeight(diameter, wellPressure, percentOverBalance)}
            units={unitSystem.weightUnits}
          >
            FINAL WEIGHT
          </TableRow>
          <TableRow
            data={sinkerBarWeight(diameter, wellPressure, percentOverBalance)}
            units={unitSystem.weightUnits}
          >
            SINKER BAR WEIGHT
          </TableRow>
        </tbody>
      </table>
    </>
  );
};

export default WeightBar;
