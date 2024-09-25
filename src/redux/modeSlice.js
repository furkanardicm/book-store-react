// src/store/modeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const modes = {
    0: {
        mode: false
    },
    1: {
        mode: true
    }
};

const initialState = {
  mode: modes[parseInt(localStorage.getItem('mode'))] || modes[0], // Uygulama açıldığında localStorage'daki temayı al
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = modes[action.payload];
      localStorage.setItem('mode', action.payload);
    },
  },
});

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
