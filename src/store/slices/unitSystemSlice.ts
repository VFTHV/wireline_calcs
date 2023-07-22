import { createSlice } from '@reduxjs/toolkit';
import {
  DepthUnits,
  WeightUnits,
  DiameterUnits,
  PressureUnits,
  CapacityUnits,
  TempUnits,
  ResistivityUnits,
  ResistanceUnits,
} from './types';

export interface UnitSystemState {
  depthUnits: 'ft' | 'm';
  weightUnits: 'lbs' | 'kg';
  diameterUnits: 'in' | 'mm';
  pressureUnits: 'psi' | 'atm';
  capacityUnits: 'bbl/100ft' | 'cu.m/m';
  tempUnits: 'degF' | 'degC';
  resistivityUnits: 'Ohm/Kft' | 'Ohm/Km';
  resistanceUnits: 'Ohm';
  microSecUnits: 'usec';
  allUnits: 'ENGLISH' | 'METRIC';
}

const initialState: UnitSystemState = {
  depthUnits: DepthUnits.FT,
  weightUnits: WeightUnits.LBS,
  diameterUnits: DiameterUnits.INCH,
  pressureUnits: PressureUnits.PSI,
  capacityUnits: CapacityUnits.BBL,
  tempUnits: TempUnits.DEGF,
  resistivityUnits: ResistivityUnits.OHM_KFT,
  resistanceUnits: ResistanceUnits.OHM,
  microSecUnits: 'usec',
  allUnits: 'ENGLISH',
};

const unitSystemSlice = createSlice({
  name: 'unitSystem',
  initialState,
  reducers: {
    changeDepthUnits(state, action) {
      state.depthUnits = action.payload;
    },
    changeWeightUnits(state, action) {
      state.weightUnits = action.payload;
    },
    changeDiameterUnits(state, action) {
      state.diameterUnits = action.payload;
    },
    changePressureUnits(state, action) {
      state.pressureUnits = action.payload;
    },
    changeCapacityUnits(state, action) {
      state.capacityUnits = action.payload;
    },
    changeTempUnits(state, action) {
      state.tempUnits = action.payload;
    },
    changeResistivityUnits(state, action) {
      state.resistivityUnits = action.payload;
    },
    changeAll(state, action) {
      state.allUnits = action.payload;
      if (action.payload === 'ENGLISH') {
        state.depthUnits = DepthUnits.FT;
        state.weightUnits = WeightUnits.LBS;
        state.diameterUnits = DiameterUnits.INCH;
        state.pressureUnits = PressureUnits.PSI;
        state.capacityUnits = CapacityUnits.BBL;
        state.tempUnits = TempUnits.DEGF;
        state.resistivityUnits = ResistivityUnits.OHM_KFT;
      } else {
        state.depthUnits = DepthUnits.M;
        state.weightUnits = WeightUnits.KG;
        state.diameterUnits = DiameterUnits.MM;
        state.pressureUnits = PressureUnits.ATM;
        state.capacityUnits = CapacityUnits.M3;
        state.tempUnits = TempUnits.DEGC;
        state.resistivityUnits = ResistivityUnits.OHM_KM;
      }
    },
  },
});

export const {
  changeDepthUnits,
  changeDiameterUnits,
  changeWeightUnits,
  changePressureUnits,
  changeCapacityUnits,
  changeTempUnits,
  changeResistivityUnits,
  changeAll,
} = unitSystemSlice.actions;
export const unitSystemReducer = unitSystemSlice.reducer;
