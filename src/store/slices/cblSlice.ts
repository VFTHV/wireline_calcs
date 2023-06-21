import { createSlice } from '@reduxjs/toolkit';
import { PipeSpecs, casingData } from '../../database/casingsTubings';

export interface CblState {
  casing: PipeSpecs | undefined;
  tubing: PipeSpecs | undefined;
}

const initialState: CblState = {
  casing: undefined,
  tubing: casingData[0], // change this to tubing data array
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
  },
});

export const { changeCasing, changeTubing } = cblSlice.actions;
export const cblReducer = cblSlice.reducer;
