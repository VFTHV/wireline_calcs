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
import {
  measurementObject as mo,
  DepthUnits,
  WeightUnits,
  DiameterUnits,
  PressureUnits,
  CapacityUnits,
  TempUnits,
  ResistivityUnits,
  PumpRateUnits,
  VelocityUnits,
} from '../store/slices/types';

export const useLocalStorage = () => {
  const dispatch = useDispatch();
  const getAllUnits = () => {
    useEffect(() => {
      if (mo.depth && localStorage.getItem(mo.depth)) {
        dispatch(changeDepthUnits(localStorage.getItem(mo.depth)));
      }
      if (mo.pressure && localStorage.getItem(mo.pressure)) {
        dispatch(changePressureUnits(localStorage.getItem(mo.pressure)));
      }
      if (mo.diameter && localStorage.getItem(mo.diameter)) {
        dispatch(changeDiameterUnits(localStorage.getItem(mo.diameter)));
      }
      if (mo.toolWeight && localStorage.getItem(mo.toolWeight)) {
        dispatch(changeWeightUnits(localStorage.getItem(mo.toolWeight)));
      }
      if (mo.capacity && localStorage.getItem(mo.capacity)) {
        dispatch(changeCapacityUnits(localStorage.getItem(mo.capacity)));
      }
      if (mo.temperature && localStorage.getItem(mo.temperature)) {
        dispatch(changeTempUnits(localStorage.getItem(mo.temperature)));
      }
      if (mo.resistivity && localStorage.getItem(mo.resistivity)) {
        dispatch(changeResistivityUnits(localStorage.getItem(mo.resistivity)));
      }
      if (mo.pumpRate && localStorage.getItem(mo.pumpRate)) {
        dispatch(changePumpRateUnits(localStorage.getItem(mo.pumpRate)));
      }
      if (mo.velocity && localStorage.getItem(mo.velocity)) {
        dispatch(changeVelocityUnits(localStorage.getItem(mo.velocity)));
      }
    }, []);
  };

  const setAllLocalStorageUnits = (allUnits: AllUnitsType) => {
    if (allUnits === 'ENGLISH') {
      mo.depth && localStorage.setItem(mo.depth, DepthUnits.FT);
      mo.pressure && localStorage.setItem(mo.pressure, PressureUnits.PSI);
      mo.diameter && localStorage.setItem(mo.diameter, DiameterUnits.INCH);
      mo.toolWeight && localStorage.setItem(mo.toolWeight, WeightUnits.LBS);
      mo.capacity && localStorage.setItem(mo.capacity, CapacityUnits.BBL);
      mo.temperature && localStorage.setItem(mo.temperature, TempUnits.DEGF);
      mo.resistivity &&
        localStorage.setItem(mo.resistivity, ResistivityUnits.OHM_KFT);
      mo.pumpRate && localStorage.setItem(mo.pumpRate, PumpRateUnits.BBLMIN);
      mo.velocity && localStorage.setItem(mo.velocity, VelocityUnits.FTMIN);
    } else {
      mo.depth && localStorage.setItem(mo.depth, DepthUnits.M);
      mo.pressure && localStorage.setItem(mo.pressure, PressureUnits.ATM);
      mo.diameter && localStorage.setItem(mo.diameter, DiameterUnits.MM);
      mo.toolWeight && localStorage.setItem(mo.toolWeight, WeightUnits.KG);
      mo.capacity && localStorage.setItem(mo.capacity, CapacityUnits.M3);
      mo.temperature && localStorage.setItem(mo.temperature, TempUnits.DEGC);
      mo.resistivity &&
        localStorage.setItem(mo.resistivity, ResistivityUnits.OHM_KM);
      mo.pumpRate && localStorage.setItem(mo.pumpRate, PumpRateUnits.M3MIN);
      mo.velocity && localStorage.setItem(mo.velocity, VelocityUnits.MMIN);
    }
  };
  return { getAllUnits, setAllLocalStorageUnits };
};
