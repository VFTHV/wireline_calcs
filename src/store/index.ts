import { configureStore } from '@reduxjs/toolkit';
import { WeakPointState, weakPointReducer } from './slices/weakPointSlice';
import { WeightBarState, weightBarReducer } from './slices/weightBarSlice';
import { UnitSystemState, unitSystemReducer } from './slices/unitSystemSlice';

const store = configureStore<StoreState>({
  reducer: {
    weakPoint: weakPointReducer,
    weightBar: weightBarReducer,
    unitSystem: unitSystemReducer,
  },
});

export { store };
export * from './slices/weakPointSlice';
export * from './slices/weightBarSlice';
export * from './slices/unitSystemSlice';

export interface StoreState {
  weakPoint: WeakPointState;
  weightBar: WeightBarState;
  unitSystem: UnitSystemState;
}
