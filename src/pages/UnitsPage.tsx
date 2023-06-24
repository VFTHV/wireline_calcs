import { ChangeEvent, useEffect } from 'react';
import { NavHeader, RadioDualInput } from '../components';
import {
  DepthUnits,
  WeightUnits,
  DiameterUnits,
  PressureUnits,
  CapacityUnits,
  TempUnits,
  ResistivityUnits,
  MeasurementType,
} from '../store/slices/types';
import {
  StoreState,
  changeDepthUnits,
  changeWeightUnits,
  changeDiameterUnits,
  changePressureUnits,
  changeCapacityUnits,
  changeTempUnits,
  changeResistivityUnits,
} from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export const UnitsPage = () => {
  const dispatch = useDispatch();
  const {
    depthUnits,
    weightUnits,
    diameterUnits,
    pressureUnits,
    capacityUnits,
    tempUnits,
    resistivityUnits,
  } = useSelector((state: StoreState) => state.unitSystem);

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
    if (localStorage.getItem('toolWeight')) {
      dispatch(changeWeightUnits(localStorage.getItem('toolWeight')));
    }
    if (localStorage.getItem('capacity')) {
      dispatch(changeCapacityUnits(localStorage.getItem('capacity')));
    }
    if (localStorage.getItem('temperature')) {
      dispatch(changeTempUnits(localStorage.getItem('temperature')));
    }
    if (localStorage.getItem('resistivity')) {
      dispatch(changeResistivityUnits(localStorage.getItem('resistivity')));
    }
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    action: ActionCreatorWithPayload<any>,
    name: MeasurementType
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
        onChange={(e) => handleChange(e, changeWeightUnits, 'toolWeight')}
        currentValue={weightUnits}
      />
      <RadioDualInput
        values={[CapacityUnits.BBL, CapacityUnits.M3]}
        onChange={(e) => handleChange(e, changeCapacityUnits, 'capacity')}
        currentValue={capacityUnits}
      />
      <RadioDualInput
        values={[TempUnits.DEGF, TempUnits.DEGC]}
        onChange={(e) => handleChange(e, changeTempUnits, 'temperature')}
        currentValue={tempUnits}
      />
      <RadioDualInput
        values={[ResistivityUnits.OHM_KFT, ResistivityUnits.OHM_KM]}
        onChange={(e) => handleChange(e, changeResistivityUnits, 'resistivity')}
        currentValue={resistivityUnits}
      />
    </>
  );
};
