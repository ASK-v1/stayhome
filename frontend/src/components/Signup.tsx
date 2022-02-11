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

import { SignupInterface } from '../interfaces';
import { userSignup } from '../store/userAction';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Signup(props: {
  signup: boolean;
  setSignup: Function;
  setLogin: Function;
}) {
  const [sign, setSign] = useState<SignupInterface>({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof SignupInterface) =>
    function (event: React.ChangeEvent<HTMLInputElement>) {
      setSign({ ...sign, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setSign({ ...sign, showPassword: !sign.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const submitSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: SignupInterface = {
      email: sign.email,
      password: sign.password,
      firstName: sign.firstName,
      lastName: sign.lastName,
    };
    try {
      await userSignup(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth={'md'}
        open={props.signup}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => props.setSignup(false)}
      >
        <div style={{ display: 'flex' }}>
          <img src={'img/dialog.jpg'} width="450" />
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
              SIGN UP
            </h1>
            <DialogContent>
              <form
                onSubmit={submitSignup}
                style={{
                  padding: '40px',
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
                  placeholder="First name"
                  onChange={handleChange('firstName')}
                  value={sign.firstName}
                />
                <TextField
                  style={{
                    width: '20rem',
                  }}
                  required
                  placeholder="Last name"
                  onChange={handleChange('lastName')}
                  value={sign.lastName}
                />
                <TextField
                  style={{
                    width: '20rem',
                  }}
                  required
                  placeholder="Email"
                  onChange={handleChange('email')}
                  value={sign.email}
                />
                <OutlinedInput
                  style={{ width: '20rem' }}
                  type={sign.showPassword ? 'text' : 'password'}
                  value={sign.password}
                  onChange={handleChange('password')}
                  autoComplete="false"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {sign.showPassword ? <VisibilityOff /> : <Visibility />}
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
                    gap: '35px',
                    fontSize: '20px',
                    marginTop: '20px',
                    color: 'gray',
                  }}
                >
                  <h1>Already have an account?</h1>
                  <button
                    style={{
                      color: 'black',
                      fontFamily: 'Rowdies',
                      textDecoration: 'underline',
                    }}
                    onClick={() => {
                      props.setSignup(false);
                      props.setLogin(true);
                    }}
                  >
                    Log in
                  </button>
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: 'black',
                    padding: '15px',
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bolder',
                    alignSelf: 'center',
                    borderRadius: '5px',
                    paddingLeft: '119px',
                    paddingRight: '119px',
                    marginTop: '40px',
                    boxShadow: '2px 12px 12px 2px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  Continue
                </button>
              </form>
            </DialogContent>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
