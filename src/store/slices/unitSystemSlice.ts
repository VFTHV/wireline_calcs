import { createSlice } from '@reduxjs/toolkit';
import { Depth, Weight, Diameter } from './types';

export interface UnitSystemState {
  depthUnits: 'ft' | 'm';
  weightUnits: 'lbs' | 'kg';
  diameterUnits: 'in' | 'mm';
}

const initialState: UnitSystemState = {
  depthUnits: Depth.FT,
  weightUnits: Weight.LBS,
  diameterUnits: Diameter.INCH,
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
  },
});

export const { changeDepthUnits, changeDiameterUnits, changeWeightUnits } =
  unitSystemSlice.actions;
export const unitSystemReducer = unitSystemSlice.reducer;