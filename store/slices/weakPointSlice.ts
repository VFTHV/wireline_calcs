import { createSlice } from '@reduxjs/toolkit';
import { CableSpecs, cablesData } from '../../database/cables';

export interface WeakPointState {
  cablesData: CableSpecs[];
  currentCable: CableSpecs | undefined;
  depth: number;
  toolWeight: number;
  cableWeight: number;
  maxWPstrength: number;
  outersRehead: number;
  toolWeightVsWeakPoint: number;
}

const initialState: WeakPointState = {
  cablesData,
  currentCable: undefined,
  depth: 0,
  toolWeight: 0,
  cableWeight: 0,
  maxWPstrength: 0,
  outersRehead: 0,
  toolWeightVsWeakPoint: 0,
};

const weakPointSlice = createSlice({
  name: 'weakPoint',
  initialState,
  reducers: {
    changeCableType(state, action: { payload: string }) {
      const selectedCable = state.cablesData.find(
        (cable) => cable.type === action.payload
      );

      // state = { ...initialState, currentCable: selectedCable };
      state.currentCable = selectedCable;
      state.cableWeight =
        state.maxWPstrength =
        state.outersRehead =
        state.depth =
        state.toolWeight =
        state.toolWeightVsWeakPoint =
          0;
    },
    changeToolWeight(state, action: { payload: number }) {
      state.toolWeight = action.payload;

      if (state.maxWPstrength) {
        state.toolWeightVsWeakPoint = +(
          action.payload / state.maxWPstrength
        ).toFixed(2);
      }
    },
    changeDepth(state, action: { payload: number }) {
      state.depth = action.payload;
      if (state.currentCable) {
        const cableWeight =
          state.currentCable.weightInAir * (state.depth / 1000);
        state.cableWeight = +cableWeight.toFixed();

        const maxWPstrength = state.currentCable.maxTension - cableWeight;
        state.maxWPstrength = +maxWPstrength.toFixed();

        const outersRehead = maxWPstrength / state.currentCable.outerArmorBS;
        state.outersRehead = +outersRehead.toFixed(1);

        const toolWeightVsWeakPoint = state.toolWeight / maxWPstrength;
        state.toolWeightVsWeakPoint = +toolWeightVsWeakPoint.toFixed(2);
      }
    },
  },
});

export const { changeCableType, changeDepth, changeToolWeight } =
  weakPointSlice.actions;
export const weakPointReducer = weakPointSlice.reducer;
