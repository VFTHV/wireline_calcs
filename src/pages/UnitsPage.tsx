import { ChangeEvent, useEffect } from 'react';
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
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

const UnitsPage = () => {
  const dispatch = useDispatch();
  const { depthUnits, weightUnits, diameterUnits, pressureUnits } = useSelector(
    (state: StoreState) => state.unitSystem
  );

  useEffect(() => {
    dispatch(changeDepthUnits(localStorage.getItem('depth')));
    dispatch(changePressureUnits(localStorage.getItem('pressure')));
    dispatch(changeDiameterUnits(localStorage.getItem('diameter')));
    dispatch(changeWeightUnits(localStorage.getItem('weight')));
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    action: ActionCreatorWithPayload<any>,
    name: string
  ) => {
    dispatch(action(e.target.value));
    localStorage.setItem(name, e.target.value);
  };

  return (
    <>
      <NavHeader>Change Measurement Units</NavHeader>
      <RadioDualInput
        values={[Depth.FT, Depth.M]}
        onChange={(e) => handleChange(e, changeDepthUnits, 'depth')}
        currentValue={depthUnits}
      />
      <RadioDualInput
        values={[Pressure.PSI, Pressure.ATM]}
        onChange={(e) => handleChange(e, changePressureUnits, 'pressure')}
        currentValue={pressureUnits}
      />
      <RadioDualInput
        values={[Diameter.INCH, Diameter.MM]}
        onChange={(e) => handleChange(e, changeDiameterUnits, 'diameter')}
        currentValue={diameterUnits}
      />
      <RadioDualInput
        values={[Weight.LBS, Weight.KG]}
        onChange={(e) => handleChange(e, changeWeightUnits, 'weight')}
        currentValue={weightUnits}
      />
    </>
  );
};

export default UnitsPage;
