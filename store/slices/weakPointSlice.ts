import { createSlice } from '@reduxjs/toolkit';
import { CableSpecs, cablesData } from '../../database/cables';
import { Environment, UnitSystem } from './types';

export interface WeakPointState {
  cablesData: CableSpecs[];
  currentCable: CableSpecs | undefined;
  depth: number;
  toolWeight: number;
  environment: Environment;
  UnitSystem: UnitSystem;
}

const initialState: WeakPointState = {
  cablesData,
  currentCable: undefined,
  depth: 0,
  toolWeight: 0,
  environment: Environment.FLUID,
  UnitSystem: UnitSystem.ENGLISH,
};

const weakPointSlice = createSlice({
  name: 'weakPoint',
  initialState,
  reducers: {
    changeCableType(state, action: { payload: string }) {
      const selectedCable = state.cablesData.find(
        (cable) => cable.type === action.payload
      );
      state.currentCable = selectedCable;
      state.depth = state.toolWeight = 0;
    },
    changeToolWeight(state, action: { payload: number }) {
      state.toolWeight = action.payload;
    },
    changeDepth(state, action: { payload: number }) {
      state.depth = action.payload;
    },
    changeEnvironment(state, action) {
      state.environment = action.payload;
    },
    changeUnits(state, action) {
      state.UnitSystem = action.payload;
    },
  },
});

export const {
  changeCableType,
  changeDepth,
  changeToolWeight,
  changeEnvironment,
  changeUnits,
} = weakPointSlice.actions;
export const weakPointReducer = weakPointSlice.reducer;
