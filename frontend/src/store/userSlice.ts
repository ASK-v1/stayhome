import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStateInterface } from '../interfaces';

const initialState: UserStateInterface = {
  token: '',
  userData: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    userAuth: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    userData: (state, action: PayloadAction<object>) => {
      state.userData = action.payload;
    },
    userLogout: (state) => {
      state.token = '';
      state.userData = {};
    },
  },
});

export const { userAuth, userData, userLogout } = userSlice.actions;

export default userSlice.reducer;
