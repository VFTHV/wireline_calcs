import { ChangeEvent, useEffect } from 'react';
import { NavHeader, RadioDualInput } from '../components/AllComponents';
import {
  DepthUnits,
  WeightUnits,
  DiameterUnits,
  PressureUnits,
} from '../store/slices/types';
import {
  StoreState,
  changeDepthUnits,
  changeWeightUnits,
  changeDiameterUnits,
  changePressureUnits,
} from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export const UnitsPage = () => {
  const dispatch = useDispatch();
  const { depthUnits, weightUnits, diameterUnits, pressureUnits } = useSelector(
    (state: StoreState) => state.unitSystem
  );

  useEffect(() => {
    if (localStorage.getItem('depth')) {
      dispatch(changeDepthUnits(localStorage.getItem('depth')));
    }
    if (localStorage.getItem('pressure')) {
      dispatch(changePressureUnits(localStorage.getItem('pressure')));
    }
    if (localStorage.getItem('diameter')) {
      dispatch(changeDiameterUnits(localStorage.getItem('diameter')));
    }
    if (localStorage.getItem('weight')) {
      dispatch(changeWeightUnits(localStorage.getItem('weight')));
    }
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
        values={[DepthUnits.FT, DepthUnits.M]}
        onChange={(e) => handleChange(e, changeDepthUnits, 'depth')}
        currentValue={depthUnits}
      />
      <RadioDualInput
        values={[PressureUnits.PSI, PressureUnits.ATM]}
        onChange={(e) => handleChange(e, changePressureUnits, 'pressure')}
        currentValue={pressureUnits}
      />
      <RadioDualInput
        values={[DiameterUnits.INCH, DiameterUnits.MM]}
        onChange={(e) => handleChange(e, changeDiameterUnits, 'diameter')}
        currentValue={diameterUnits}
      />
      <RadioDualInput
        values={[WeightUnits.LBS, WeightUnits.KG]}
        onChange={(e) => handleChange(e, changeWeightUnits, 'weight')}
        currentValue={weightUnits}
      />
    </>
  );
};
