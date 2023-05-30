import { configureStore } from '@reduxjs/toolkit';
import { WeakPointState, weakPointReducer } from './slices/weakPointSlice';
import { WeightBarState, weightBarReducer } from './slices/weightBarSlice';
import { UnitSystemState, unitSystemReducer } from './slices/unitSystemSlice';
import { MaxPullState, maxPullReducer } from './slices/maxPullSlice';

const store = configureStore<StoreState>({
  reducer: {
    weakPoint: weakPointReducer,
    weightBar: weightBarReducer,
    unitSystem: unitSystemReducer,
    maxPull: maxPullReducer,
  },
});

export { store };
export * from './slices/weakPointSlice';
export * from './slices/weightBarSlice';
export * from './slices/unitSystemSlice';
export * from './slices/maxPullSlice';

export interface StoreState {
  weakPoint: WeakPointState;
  weightBar: WeightBarState;
  unitSystem: UnitSystemState;
  maxPull: MaxPullState;
}
