import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { LoginInterface } from '../types';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login(props: { login: boolean; setLogin: Function }) {
  const [log, setLog] = useState<LoginInterface>({
    password: '',
    email: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof LoginInterface) =>
    function (event: React.ChangeEvent<HTMLInputElement>) {
      setLog({ ...log, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setLog({ ...log, showPassword: !log.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth={'md'}
        open={props.login}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => props.setLogin(false)}
      >
        <div style={{ display: 'flex' }}>
          <img src={'img/dialog.jpg'} width="482" />
          <div>
            <h1
              style={{
                textAlign: 'center',
                padding: '20px',
                fontSize: '30px',
                fontFamily: 'Rowdies',
                fontWeight: 'bolder',
              }}
            >
              LOG IN
            </h1>
            <DialogContent>
              <div
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <TextField
                  style={{
                    width: '20rem',
                  }}
                  required
                  placeholder="Email"
                />
                <OutlinedInput
                  style={{ width: '20rem' }}
                  type={log.showPassword ? 'text' : 'password'}
                  value={log.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {log.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Password"
                  required
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '40px',
                    fontSize: '20px',
                    marginTop: '30px',
                    color: 'gray',
                  }}
                >
                  <h1>Don't have an account?</h1>
                  <a
                    style={{
                      color: 'black',
                      fontFamily: 'Rowdies',
                      textDecoration: 'underline',
                    }}
                    href="/"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </DialogContent>
            <button
              className=" p-32"
              style={{
                backgroundColor: 'black',
                padding: '15px',
                color: 'white',
                margin: '20px',
                fontSize: '20px',
                fontWeight: 'bolder',
                alignSelf: 'center',
                borderRadius: '5px',
                paddingLeft: '150px',
                paddingRight: '150px',
                marginTop: '30px',
                boxShadow: '2px 12px 12px 2px rgba(0, 0, 0, 0.2)',
              }}
              onClick={() => props.setLogin(false)}
            >
              Continue
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
