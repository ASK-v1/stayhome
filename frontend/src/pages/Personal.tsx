import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { PersonalInterface } from '../interfaces';
import { userEdit } from '../store/userAction';
import store from '../store';

export default function Personal() {
  window.scrollTo(0, 0);

  const user = store.useAppSelector((state) => JSON.parse(state.user.user));
  const dispatch = store.useAppDispatch();

  const [personal, setPersonal] = useState<PersonalInterface>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    about: '',
  });

  const [loading, setLoading] = useState(false);

  const progress = async () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1111);
    });
  };

  const saveLoading = async () => {
    setLoading(true);
    await progress();
    setLoading(false);
  };

  const handleChange =
    (prop: keyof PersonalInterface) => (event: React.ChangeEvent<HTMLInputElement>) =>
      setPersonal({ ...personal, [prop]: event.target.value });

  const personalEdit = async () => {
    const data: PersonalInterface = {
      firstName: personal.firstName,
      lastName: personal.lastName,
      email: personal.email,
      phone: personal.phone,
      about: personal.about,
      id: user._id,
    };
    try {
      await saveLoading();
      await dispatch(userEdit(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mb-20">
        <h1 className="text-center text-3xl my-10 font-black">PERSONAL INFO</h1>
        <div className="flex flex-col gap-10 justify-evenly">
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold text-gray-800">Name</h1>
              <div className="flex flex-row gap-5 mt-5">
                <TextField
                  sx={{ minWidth: 290 }}
                  placeholder={user.firstName}
                  variant="outlined"
                  onChange={handleChange('firstName')}
                />
                <TextField
                  sx={{ minWidth: 290 }}
                  placeholder={user.lastName}
                  variant="outlined"
                  onChange={handleChange('lastName')}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold  text-gray-800">Email address</h1>
              <div className="mt-5">
                <TextField
                  sx={{ minWidth: 600 }}
                  placeholder={user.email}
                  variant="outlined"
                  onChange={handleChange('email')}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold  text-gray-800">Phone number</h1>
              <div className="mt-5">
                <TextField
                  sx={{ minWidth: 600 }}
                  placeholder={user.phone}
                  variant="outlined"
                  onChange={handleChange('phone')}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold  text-gray-800">About</h1>
              <div className="mt-5">
                <TextField
                  placeholder={user.about}
                  multiline
                  rows={3}
                  fullWidth
                  sx={{ width: '600px' }}
                  onChange={handleChange('about')}
                />
              </div>
            </div>
          </div>
          <button
            onClick={personalEdit}
            className="font-semibold mt-10 rounded-md bg-blue-600 text-white text-xl shadow-2xl hover:bg-blue-500 self-center p-3 w-60"
          >
            Save
          </button>
        </div>
      </div>
      <Footer />
      {loading && (
        <div className="flex justify-center">
          <CircularProgress
            size={50}
            style={{
              position: 'fixed',
              top: '50%',
              color: 'orange',
            }}
          />
        </div>
      )}
    </div>
  );
}
