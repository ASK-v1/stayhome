import axios from 'axios';
import { Dispatch } from 'redux';
import { userAuth, userData, logout, userRooms } from './userSlice';

axios.defaults.baseURL = 'http://localhost:5000';

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

const getRooms = async (dispatch: Dispatch) => {
  const { data } = await axios.get('/users/rooms');
  dispatch(userRooms(data));
};
export { userLogout, userLogin, userSignup, userEdit, userHost, userPhoto, getRooms };
