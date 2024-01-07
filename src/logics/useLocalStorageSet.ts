import { useEffect } from 'react';
import {
  changeDepthUnits,
  changeWeightUnits,
  changeDiameterUnits,
  changePressureUnits,
  changeCapacityUnits,
  changeTempUnits,
  changeResistivityUnits,
  changePumpRateUnits,
  changeVelocityUnits,
} from '../store';
import { useDispatch } from 'react-redux';
import { AllUnitsType, MeasurementType } from '../store/slices/types';

export const useLocalStorage = () => {
  const dispatch = useDispatch();
  const getAllUnits = () => {
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
      if (localStorage.getItem('pumpRate')) {
        dispatch(changePumpRateUnits(localStorage.getItem('pumpRate')));
      }
      if (localStorage.getItem('velocity')) {
        dispatch(changeVelocityUnits(localStorage.getItem('velocity')));
      }
    }, []);
  };

  const setAllUnits = (allUnits: AllUnitsType) => {
    // if ((allUnits = 'ENGLISH')) {
    //   localStorage.setItem('depth');
    // }
  };
  return { getAllUnits };
};
