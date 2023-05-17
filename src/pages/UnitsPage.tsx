import NavHeader from '../components/NavHeader';
import RadioDualInput from '../components/RadioDualInput';
import { Depth, Weight, Diameter, Pressure } from '../store/slices/types';
import {
  StoreState,
  changeDepthUnits,
  changeWeightUnits,
  changeDiameterUnits,
  changePressureUnits,
} from '../store';
import { useDispatch, useSelector } from 'react-redux';

const UnitsPage = () => {
  const dispatch = useDispatch();
  const { depthUnits, weightUnits, diameterUnits, pressureUnits } = useSelector(
    (state: StoreState) => state.unitSystem
  );

  return (
    <>
      <NavHeader>Measurement Units</NavHeader>
      <RadioDualInput
        values={[Depth.FT, Depth.M]}
        onChange={(e) => dispatch(changeDepthUnits(e.target.value))}
        currentValue={depthUnits}
      />
      <RadioDualInput
        values={[Pressure.PSI, Pressure.ATM]}
        onChange={(e) => dispatch(changePressureUnits(e.target.value))}
        currentValue={pressureUnits}
      />
      <RadioDualInput
        values={[Diameter.INCH, Diameter.MM]}
        onChange={(e) => dispatch(changeDiameterUnits(e.target.value))}
        currentValue={diameterUnits}
      />
      <RadioDualInput
        values={[Weight.LBS, Weight.KG]}
        onChange={(e) => dispatch(changeWeightUnits(e.target.value))}
        currentValue={weightUnits}
      />
    </>
  );
};

export default UnitsPage;
