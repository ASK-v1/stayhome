import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Signup from './Signup';
import Login from './Login';
import store from '../store';
import { userLogout } from '../store/userAction';
import { useNavigate } from 'react-router';

export default function Navbar() {
  const [signup, setSignup] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = store.useAppDispatch();

  const logout = () => {
    dispatch(userLogout);
    navigate('/');
    window.location.reload();
  };

  const isAuth = store.useAppSelector((state) => state.user.isAuth);

  let userData;
  if (isAuth) userData = store.useAppSelector((state) => JSON.parse(state.user.user));

  return (
    <div>
      <div className="flex items-center justify-around bg-orange-500 p-2">
        <Link to="/">
          <div className="bg-logo h-16 w-52 bg-center bg-cover" />
        </Link>
        <div className="flex gap-10 items-center">
          {isAuth && !userData.host && (
            <Button
              onClick={() => navigate('/becomehost')}
              className="font-semibold p-3 border-white text-white capitalize flex gap-1 "
              variant="outlined"
            >
              <h1>Become</h1>
              <h1 className="lowercase">a</h1>
              <h1>Host</h1>
            </Button>
          )}

          <div>
            <IconButton onClick={handleClick}>
              <PermIdentityIcon className="text-4xl text-white" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: 200,
                },
              }}
            >
              {!isAuth && (
                <MenuItem
                  onClick={() => {
                    setLogin(true);
                    setAnchorEl(null);
                  }}
                >
                  Log in
                </MenuItem>
              )}

              {!isAuth && (
                <MenuItem
                  onClick={() => {
                    setSignup(true);
                    setAnchorEl(null);
                  }}
                >
                  Sign up
                </MenuItem>
              )}
              {isAuth && <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>}
              {isAuth && userData.host && <MenuItem>Manage listing</MenuItem>}
              {isAuth && <MenuItem onClick={() => navigate('/personal')}>Personal</MenuItem>}
              {isAuth && <MenuItem onClick={logout}>Log out</MenuItem>}
            </Menu>
          </div>
        </div>
      </div>
      <Signup signup={signup} setSignup={setSignup} setLogin={setLogin} />
      <Login login={login} setLogin={setLogin} setSignup={setSignup} />
    </div>
  );
}
