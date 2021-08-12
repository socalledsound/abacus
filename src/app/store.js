import { configureStore } from '@reduxjs/toolkit';
import bitReducer from '../features/bit/bitSlice';
import byteReducer from '../features/byte/byteSlice'
export const store = configureStore({
  reducer: {
    bits: bitReducer,
    bytes: byteReducer,
  },
});
