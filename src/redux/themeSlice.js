// src/store/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const themes = {
    orangeTheme: {
        primary: '#DD6B20', 
        secondary: '#FB923C',
    },
    blueTheme: {
        primary: '#0C4A6E',
        secondary: '#38BDF8',
    },
    greenTheme: {
        primary: '#14532D',
        secondary: '#4ADE80',
    },
    yellowTheme: {
        primary: '#d5a201',
        secondary: '#FCD34D',
    },
    purpleTheme: {
        primary: '#4C1D95',
        secondary: '#A855F7',
    },
};

const initialState = {
  theme: themes[localStorage.getItem('theme')] || themes['purpleTheme'], // Uygulama açıldığında localStorage'daki temayı al
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = themes[action.payload];
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
