import axios from 'axios';
import { Dispatch } from 'redux';
import { userAuth, userData, logout } from './userSlice';

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

export { userLogout, userLogin, userSignup, userEdit, userHost };
