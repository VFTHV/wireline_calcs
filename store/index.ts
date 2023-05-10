import { configureStore } from '@reduxjs/toolkit';
import { WeakPointState, weakPointReducer } from './slices/weakPointSlice';

const store = configureStore<StoreState>({
  reducer: {
    weakPoint: weakPointReducer,
  },
});

export { store };
export * from './slices/weakPointSlice';

export interface StoreState {
  weakPoint: WeakPointState;
}
