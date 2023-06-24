import { createSlice } from '@reduxjs/toolkit';
import {
  DepthUnits,
  WeightUnits,
  DiameterUnits,
  PressureUnits,
  CapacityUnits,
  TempUnits,
} from './types';

export interface UnitSystemState {
  depthUnits: 'ft' | 'm';
  weightUnits: 'lbs' | 'kg';
  diameterUnits: 'in' | 'mm';
  pressureUnits: 'psi' | 'atm';
  capacityUnits: 'bbl/100ft' | 'cu.m/m';
  tempUnits: 'degF' | 'degC';
}

const initialState: UnitSystemState = {
  depthUnits: DepthUnits.FT,
  weightUnits: WeightUnits.LBS,
  diameterUnits: DiameterUnits.INCH,
  pressureUnits: PressureUnits.PSI,
  capacityUnits: CapacityUnits.BBL,
  tempUnits: TempUnits.DEGF,
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
  },
});

export const {
  changeDepthUnits,
  changeDiameterUnits,
  changeWeightUnits,
  changePressureUnits,
  changeCapacityUnits,
} = unitSystemSlice.actions;
export const unitSystemReducer = unitSystemSlice.reducer;
