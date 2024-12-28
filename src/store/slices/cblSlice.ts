import { createSlice } from '@reduxjs/toolkit';
import { PipeSpecs, casingData } from '../../database/casingsTubings';
import { FluidSpecs, fluidsData } from '../../database/cbl';
import { CompDictKeysType } from '../../App';

export interface CblState {
  casing: PipeSpecs | undefined;
  tubing: PipeSpecs | undefined;
  fluid: FluidSpecs;
  compDictKey: CompDictKeysType;
  isModalOpen: boolean;
}

const initialState: CblState = {
  casing: undefined,
  tubing: casingData[0], // change this to tubing data array
  fluid: fluidsData[0],
  compDictKey: 'navPage',
  isModalOpen: false,
};

const cblSlice = createSlice({
  name: 'cbl',
  initialState,
  reducers: {
    changeCasing(state, action: { payload: PipeSpecs | undefined }) {
      state.casing = action.payload;
    },
    changeTubing(state, action: { payload: PipeSpecs | undefined }) {
      state.tubing = action.payload;
    },
    changeFluid(state, action) {
      const selected = fluidsData.find(
        (fluid: FluidSpecs) => fluid.type === action.payload
      );
      if (!selected) return;
      state.fluid = selected;
    },
    changeCompDictKey(state, action: { payload: CompDictKeysType }) {
      state.compDictKey = action.payload;
    },
    changeIsModalOpen(state, action: { payload: boolean }) {
      state.isModalOpen = action.payload;
    },
  },
});

export const {
  changeCasing,
  changeTubing,
  changeFluid,
  changeCompDictKey,
  changeIsModalOpen,
} = cblSlice.actions;
export const cblReducer = cblSlice.reducer;
