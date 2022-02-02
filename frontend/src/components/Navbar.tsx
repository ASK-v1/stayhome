import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center justify-around bg-orange-500 p-3">
      <Link to="/">
        <img src={'img/logo.png'} width="200" />
      </Link>
      <div className="flex gap-10 items-center">
        <Button
          className="p-3 border-white text-white capitalize"
          variant="outlined"
        >
          Become Host
        </Button>
        <div>
          <IconButton
            className=" border-2 border-black p-3 rounded"
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon className="text-4xl text-white" />
          </IconButton>

          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: 200,
              },
            }}
          >
            {['Register', 'Login', 'Logout'].map((option) => (
              <MenuItem
                key={option}
                selected={option === 'Register'}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
}
