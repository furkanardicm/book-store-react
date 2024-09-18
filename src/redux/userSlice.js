import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userID: null, // Kullanıcı ID'si için
    email: '',
    fullname: '',
    password: '',
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setUserFullName: (state, action) => {
      state.fullname = action.payload;
    },
    setUserID: (state, action) => {
      state.userID = action.payload;
    },
    setUserPassword: (state, action) => {
      state.password = action.payload;
    },
    clearUser: (state) => {
      state.userID = null;
      state.email = '';
      state.fullname = '';
      state.password = '';
    },
    updateUser: (state, action) => {
      const { email, fullname,  password } = action.payload;
      if (email !== undefined) state.email = email;
      if (fullname !== undefined) state.fullname = fullname;
      if (password !== undefined) state.password = password;
    },
  },
});

export const { setUserEmail, setUserFullName, setUserID, setUserPassword, clearUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
