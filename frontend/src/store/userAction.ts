import axios from 'axios';
import { Dispatch } from 'redux';
import { userAuth, userData, userLogout } from './userSlice';

const userSignup = async (user: object) => {
  await axios.post('http://localhost:5000/signup', user);
};

const userLogin = (user: object) => async (dispatch: Dispatch) => {
  const { data } = await axios.post('http://localhost:5000/login', user);
  dispatch(userAuth(data.token));
  dispatch(userData(data.userData));
};

const logout = (dispatch: Dispatch) => {
  dispatch(userLogout());
};

export { logout, userLogin, userSignup };
