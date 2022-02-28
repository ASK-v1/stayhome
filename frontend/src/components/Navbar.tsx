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
    window.location.reload();
  };

  return (
    <div>
      <div className="flex items-center justify-around bg-orange-500 p-1">
        <Link to="/">
          <img src={'img/logo.png'} alt="logo" width="200" />
        </Link>
        <div className="flex gap-10 items-center">
          <Button className="p-3 border-white text-white capitalize" variant="outlined">
            Become Host
          </Button>
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
              <MenuItem
                onClick={() => {
                  setLogin(true);
                  setAnchorEl(null);
                }}
              >
                Log in
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setSignup(true);
                  setAnchorEl(null);
                }}
              >
                Sign up
              </MenuItem>
              <MenuItem onClick={() => navigate('/personal')}>Personal</MenuItem>
              <MenuItem>Messages</MenuItem>
              <MenuItem onClick={() => navigate('/profile')}>Listings</MenuItem>
              <MenuItem onClick={logout}>Log out</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <Signup signup={signup} setSignup={setSignup} setLogin={setLogin} />
      <Login login={login} setLogin={setLogin} setSignup={setSignup} />
    </div>
  );
}
