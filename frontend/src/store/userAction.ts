import axios from 'axios';
import { Dispatch } from 'redux';
import { userAuth, userData, logout } from './userSlice';

const userSignup = async (user: object) => {
  await axios.post('http://localhost:5000/users/signup', user);
};

const userLogin = (user: object) => async (dispatch: Dispatch) => {
  const { data } = await axios.post('http://localhost:5000/users/login', user);
  dispatch(userAuth(data.token));
  dispatch(userData(data.userData));
};

const userLogout = (dispatch: Dispatch) => {
  dispatch(logout());
};

export { userLogout, userLogin, userSignup };
