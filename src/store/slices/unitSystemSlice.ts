import { createSlice } from '@reduxjs/toolkit';
import {
  DepthUnits,
  WeightUnits,
  DiameterUnits,
  PressureUnits,
  CapacityUnits,
  TempUnits,
  ResistivityUnits,
} from './types';

export interface UnitSystemState {
  depthUnits: 'ft' | 'm';
  weightUnits: 'lbs' | 'kg';
  diameterUnits: 'in' | 'mm';
  pressureUnits: 'psi' | 'atm';
  capacityUnits: 'bbl/100ft' | 'cu.m/m';
  tempUnits: 'degF' | 'degC';
  resistivityUnits: 'Ohm/Kft' | 'Ohm/Km';
}

const initialState: UnitSystemState = {
  depthUnits: DepthUnits.FT,
  weightUnits: WeightUnits.LBS,
  diameterUnits: DiameterUnits.INCH,
  pressureUnits: PressureUnits.PSI,
  capacityUnits: CapacityUnits.BBL,
  tempUnits: TempUnits.DEGF,
  resistivityUnits: ResistivityUnits.OHM_KFT,
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
} = unitSystemSlice.actions;
export const unitSystemReducer = unitSystemSlice.reducer;
