import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStateInterface } from '../interfaces';

const initialState: UserStateInterface = {
  isAuth: !!localStorage.getItem('token'),
  user: localStorage.getItem('user') ?? '',
  rooms: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    userAuth: (state, action: PayloadAction<string>) => {
      localStorage.setItem('token', action.payload);
    },
    userData: (state, action: PayloadAction<string>) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      localStorage.clear();
    },
    userRooms: (state, action: PayloadAction<any>) => {
      state.rooms = action.payload;
    },
  },
});

export const { userAuth, userData, logout, userRooms } = userSlice.actions;

export default userSlice.reducer;
