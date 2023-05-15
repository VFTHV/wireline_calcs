import { configureStore } from '@reduxjs/toolkit';
import { WeakPointState, weakPointReducer } from './slices/weakPointSlice';
import { WeightBarState, weightBarReducer } from './slices/weightBarSlice';

const store = configureStore<StoreState>({
  reducer: {
    weakPoint: weakPointReducer,
    weightBar: weightBarReducer,
  },
});

export { store };
export * from './slices/weakPointSlice';
export * from './slices/weightBarSlice';

export interface StoreState {
  weakPoint: WeakPointState;
  weightBar: WeightBarState;
}
