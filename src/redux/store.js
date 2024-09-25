import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import themeReducer from './themeSlice';
import fontSizeReducer from './fontSizeSlice';
import modeReducer from './modeSlice'


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    theme: themeReducer,
    fSize: fontSizeReducer,
    mode: modeReducer,
  },
});

export const persistor = persistStore(store);