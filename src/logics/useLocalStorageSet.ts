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

  const setAllLocalStorageUnits = (allUnits: AllUnitsType) => {
    if (allUnits === 'ENGLISH') {
      localStorage.setItem(mo.depth, DepthUnits.FT);
      localStorage.setItem(mo.pressure, PressureUnits.PSI);
      localStorage.setItem(mo.diameter, DiameterUnits.INCH);
      localStorage.setItem(mo.toolWeight, WeightUnits.LBS);
      localStorage.setItem(mo.capacity, CapacityUnits.BBL);
      localStorage.setItem(mo.temperature, TempUnits.DEGF);
      localStorage.setItem(mo.resistivity, ResistivityUnits.OHM_KFT);
      localStorage.setItem(mo.pumpRate, PumpRateUnits.BBLMIN);
      localStorage.setItem(mo.velocity, VelocityUnits.FTMIN);
    } else {
      localStorage.setItem(mo.depth, DepthUnits.M);
      localStorage.setItem(mo.pressure, PressureUnits.ATM);
      localStorage.setItem(mo.diameter, DiameterUnits.MM);
      localStorage.setItem(mo.toolWeight, WeightUnits.KG);
      localStorage.setItem(mo.capacity, CapacityUnits.M3);
      localStorage.setItem(mo.temperature, TempUnits.DEGC);
      localStorage.setItem(mo.resistivity, ResistivityUnits.OHM_KM);
      localStorage.setItem(mo.pumpRate, PumpRateUnits.M3MIN);
      localStorage.setItem(mo.velocity, VelocityUnits.MMIN);
    }
  };
  return { getAllUnits, setAllLocalStorageUnits };
};
