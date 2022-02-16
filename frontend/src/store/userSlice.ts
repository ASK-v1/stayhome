import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStateInterface } from '../interfaces';

const initialState: UserStateInterface = {
  isAuth: !!localStorage.getItem('token'),
  user: localStorage.getItem('user') ?? '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    userAuth: (state, action: PayloadAction<string>) => {
      localStorage.setItem('token', action.payload);
    },
    userData: (state, action: PayloadAction<object>) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      localStorage.clear();
    },
  },
});

export const { userAuth, userData, logout } = userSlice.actions;

export default userSlice.reducer;