import axios from 'axios';
import { Dispatch } from 'redux';
import { userAuth, userData, logout, userRooms, userRoom } from './userSlice';
import { FiltersInterface } from '../interfaces';

axios.defaults.baseURL = process.env.URL || 'http://localhost:5000';

const userSignup = async (user: object) => {
  await axios.post('/users/signup', user);
};

const userLogin = (user: object) => async (dispatch: Dispatch) => {
  const { data } = await axios.post('/users/login', user);
  dispatch(userAuth(data.token));
  dispatch(userData(data.userData));
};

const userLogout = (dispatch: Dispatch) => {
  dispatch(logout());
};

const userEdit = (edit: object) => async (dispatch: Dispatch) => {
  const { data } = await axios.post('/users/edit', edit);
  dispatch(userData(data.userData));
};

const userHost = (save: object) => async (dispatch: Dispatch) => {
  const { data } = await axios.post('/users/host', save);
  dispatch(userData(data.userData));
};

const userPhoto = (photo: object) => async (dispatch: Dispatch) => {
  const { data } = await axios.post('/users/pp', photo);
  dispatch(userData(data.userData));
};

const getRooms = (city: string) => async (dispatch: Dispatch) => {
  const { data } = await axios.get(`/users/rooms/${city}`);
  dispatch(userRooms(data));
};

const getRoom = (id: string) => async (dispatch: Dispatch) => {
  const { data } = await axios.get(`/users/room/${id}`);
  dispatch(userRoom(data));
};

const getFilter = (filter: FiltersInterface, city: string) => async (dispatch: Dispatch) => {
  let maxCheck: number;
  let minCheck: number;
  Number(filter.maxPrice) === 0 ? (maxCheck = 9999) : (maxCheck = Number(filter.maxPrice));
  Number(filter.minPrice) === 0 ? (minCheck = 0) : (minCheck = Number(filter.minPrice));

  const { data } = await axios.get(
    `/users/rooms/${city}/filter/${filter.wifi}/${filter.kitchen}/${filter.parking}/${filter.washer}/${filter.dryer}/${filter.iron}/${filter.tv}/${filter.pool}/${filter.balcony}/${filter.entirePlace}/${filter.privateRoom}/${filter.hotelRoom}/${filter.sharedRoom}/${minCheck}/${maxCheck}`,
  );
  dispatch(userRooms(data));
};

export {
  userLogout,
  userLogin,
  userSignup,
  userEdit,
  userHost,
  userPhoto,
  getRooms,
  getRoom,
  getFilter,
};
