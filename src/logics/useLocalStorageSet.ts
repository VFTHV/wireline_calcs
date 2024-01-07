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
import { AllUnitsType } from '../store/slices/types';
import { measurementObject as mo } from '../store/slices/types';

export const useLocalStorage = () => {
  const dispatch = useDispatch();
  const getAllUnits = () => {
    useEffect(() => {
      if (localStorage.getItem(mo.depth)) {
        dispatch(changeDepthUnits(localStorage.getItem(mo.depth)));
      }
      if (localStorage.getItem(mo.pressure)) {
        dispatch(changePressureUnits(localStorage.getItem(mo.pressure)));
      }
      if (localStorage.getItem(mo.diameter)) {
        dispatch(changeDiameterUnits(localStorage.getItem(mo.diameter)));
      }
      if (localStorage.getItem(mo.toolWeight)) {
        dispatch(changeWeightUnits(localStorage.getItem(mo.toolWeight)));
      }
      if (localStorage.getItem(mo.capacity)) {
        dispatch(changeCapacityUnits(localStorage.getItem(mo.capacity)));
      }
      if (localStorage.getItem(mo.temperature)) {
        dispatch(changeTempUnits(localStorage.getItem(mo.temperature)));
      }
      if (localStorage.getItem(mo.resistivity)) {
        dispatch(changeResistivityUnits(localStorage.getItem(mo.resistivity)));
      }
      if (localStorage.getItem(mo.pumpRate)) {
        dispatch(changePumpRateUnits(localStorage.getItem(mo.pumpRate)));
      }
      if (localStorage.getItem(mo.velocity)) {
        dispatch(changeVelocityUnits(localStorage.getItem(mo.velocity)));
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
