import NavHeader from '../components/NavHeader';
import RadioDualInput from '../components/RadioDualInput';
import { Depth, Weight, Diameter } from '../store/slices/types';
import {
  StoreState,
  changeDepthUnits,
  changeWeightUnits,
  changeDiameterUnits,
} from '../store';
import { useDispatch, useSelector } from 'react-redux';

const UnitsPage = () => {
  const dispatch = useDispatch();
  const { depthUnits, weightUnits, diameterUnits } = useSelector(
    (state: StoreState) => state.unitSystem
  );

  return (
    <>
      <NavHeader>Depth Units</NavHeader>

      <RadioDualInput
        values={[Depth.FT, Depth.M]}
        onChange={(e) => dispatch(changeDepthUnits(e.target.value))}
        currentValue={depthUnits}
      />
      <RadioDualInput
        values={[Weight.LBS, Weight.KG]}
        onChange={(e) => dispatch(changeWeightUnits(e.target.value))}
        currentValue={weightUnits}
      />
      <RadioDualInput
        values={[Diameter.INCH, Diameter.MM]}
        onChange={(e) => dispatch(changeDiameterUnits(e.target.value))}
        currentValue={diameterUnits}
      />
    </>
  );
};

export default UnitsPage;
