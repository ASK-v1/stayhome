import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';

export default function Personal() {
  const [gender, setGender] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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

  const handleGender = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };
  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="mb-20">
        <h1 className="text-center text-3xl my-10 font-bold font-rowdies">
          PERSONAL INFO
        </h1>
        <div className="flex flex-col gap-5 justify-evenly">
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold">Name</h1>
              <h1 className="text-gray-800">Brandon cole</h1>
              <div className="flex flex-row gap-5 mt-5">
                <TextField
                  sx={{ minWidth: 290 }}
                  label="First name"
                  variant="outlined"
                  onChange={handleFirstName}
                />
                <TextField
                  sx={{ minWidth: 290 }}
                  label="Last name"
                  variant="outlined"
                  onChange={handleLastName}
                />
              </div>
            </div>
          </div>
          <div className="border border-gray-300 self-center w-[37.5rem]" />
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold">Gender</h1>
              <h1 className="text-gray-800">Not specified</h1>
              <div className="mt-5">
                <FormControl>
                  <Select
                    sx={{
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                      minWidth: 600,
                    }}
                    value={gender}
                    onChange={handleGender}
                    displayEmpty
                  >
                    <MenuItem disabled value="">
                      <p className=" text-gray-700">Guest</p>
                    </MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Other'}>Other</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 self-center w-[37.5rem]" />
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold">Email address</h1>
              <h1 className="text-gray-800">ask@gmail.com</h1>
              <div className="mt-5">
                <TextField
                  sx={{ minWidth: 600 }}
                  label="Email address"
                  variant="outlined"
                  onChange={handleEmail}
                />
              </div>
            </div>
          </div>
          <div className="border border-gray-300 self-center w-[37.5rem]" />
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold">Phone number</h1>
              <h1 className="text-gray-800">+90 000 000 0000</h1>
              <div className="mt-5">
                <TextField
                  sx={{ minWidth: 600 }}
                  label="Phone number"
                  variant="outlined"
                  onChange={handlePhone}
                />
              </div>
            </div>
          </div>
          <button
            onClick={saveLoading}
            className="font-extrabold mt-10 rounded-md bg-blue-600 text-white text-xl shadow-2xl hover:bg-black duration-200 ease-in-out transform hover:scale-110 self-center p-3 w-60"
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
