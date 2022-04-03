import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStateInterface } from '../interfaces';

const initialState: UserStateInterface = {
  isAuth: !!localStorage.getItem('token'),
  user: localStorage.getItem('user') ?? '',
  rooms: {},
  room: {},
  cities: [],
  roomId: '',
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
    userRoom: (state, action: PayloadAction<any>) => {
      state.room = action.payload;
    },
    cityRooms: (state, action: PayloadAction<any>) => {
      let city = [];
      action.payload.users.map((items) => city.push(items.host?.location?.city));

      state.cities = city.filter(
        (c, index) => city.indexOf(c) === index && c !== undefined && c !== null && c !== '',
      );
    },
    mark: (state, action: PayloadAction<string>) => {
      state.roomId = action.payload;
    },
  },
});

export const { userAuth, userData, logout, userRooms, userRoom, cityRooms, mark } =
  userSlice.actions;

export default userSlice.reducer;
