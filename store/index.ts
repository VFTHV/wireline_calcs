import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    weakPoint: () => 5,
  },
});

export { store };
