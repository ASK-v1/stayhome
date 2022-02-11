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
import Alert from '@mui/material/Alert';
import { LoginInterface } from '../interfaces';
import { userLogin } from '../store/userAction';
import store from '../store';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login(props: {
  login: boolean;
  setLogin: Function;
  setSignup: Function;
}) {
  const [log, setLog] = useState<LoginInterface>({
    password: '',
    email: '',
    showPassword: false,
  });

  const [showError, setShowError] = useState<boolean>(false);

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

  const dispatch = store.useAppDispatch();

  const submitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: LoginInterface = {
      email: log.email,
      password: log.password,
    };
    try {
      await dispatch(userLogin(data));
      window.location.reload();
    } catch (error) {
      console.log(error);
      setShowError(true);
    }
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
          <img src={'img/dialog.jpg'} alt="dialog" width="450" />
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
              {showError && (
                <Alert variant="filled" severity="error">
                  <strong>Incorrect email or password.</strong>
                </Alert>
              )}
              <form
                onSubmit={submitLogin}
                style={{
                  padding: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <TextField
                  value={log.email}
                  style={{
                    width: '20rem',
                  }}
                  required
                  placeholder="Email"
                  onChange={handleChange('email')}
                />
                <OutlinedInput
                  style={{ width: '20rem' }}
                  type={log.showPassword ? 'text' : 'password'}
                  value={log.password}
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
                    gap: '43px',
                    fontSize: '20px',
                    marginTop: '20px',
                    color: 'gray',
                  }}
                >
                  <h1>Don't have an account?</h1>
                  <button
                    style={{
                      color: 'black',
                      fontFamily: 'Rowdies',
                      textDecoration: 'underline',
                    }}
                    onClick={() => {
                      props.setLogin(false);
                      props.setSignup(true);
                    }}
                  >
                    Sign up
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
