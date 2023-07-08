import { useEffect } from 'react';
import {
  changeDepthUnits,
  changeWeightUnits,
  changeDiameterUnits,
  changePressureUnits,
  changeCapacityUnits,
  changeTempUnits,
  changeResistivityUnits,
} from '../store';
import { useDispatch } from 'react-redux';

export const useLocalStorageSet = () => {
  const dispatch = useDispatch();
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
};
