import { configureStore } from '@reduxjs/toolkit';

import memoryReducer from '../features/memory/memorySlice'
export const store = configureStore({
  reducer: {
    memory: memoryReducer
  },
});
