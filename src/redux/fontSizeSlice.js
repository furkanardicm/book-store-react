// src/store/fontSizeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const fontSizes = {
    0: {
        size: 16
    },
    1: {
        size: 18
    },
    2: {
        size: 20
    },
    3: {
        size: 24
    },
    4: {
        size: 26
    }
};

const initialState = {
  fSize: fontSizes[parseInt(localStorage.getItem('fSize'))] || fontSizes[1], // Uygulama açıldığında localStorage'daki temayı al
};

const fontSizeSlice = createSlice({
  name: 'fSize',
  initialState,
  reducers: {
    setFontSize: (state, action) => {
      state.fSize = fontSizes[action.payload];
      localStorage.setItem('fSize', action.payload);
    },
  },
});

export const { setFontSize } = fontSizeSlice.actions;
export default fontSizeSlice.reducer;
