import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BecomeHostLocationInterface } from '../../interfaces';
import { OutlinedInput } from '@mui/material';
import { countries } from './countries';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Map from '../Map/HostMap';

export default function Location({ setPage, setLocation }) {
  const [value, setValue] = useState<BecomeHostLocationInterface>({
    country: '',
    street: '',
    city: '',
    state: '',
    apt: '',
  });

  const navigate = useNavigate();

  const handleChange =
    (props: keyof BecomeHostLocationInterface) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue({ ...value, [props]: event.target.value });
    };

  const next = () => {
    setLocation(value);
    setPage(3);
  };

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex items-center h-screen p-20 w-7/12 self-center text-5xl font-black bg-orange-500 text-white">
          <h1>Where's your place located?</h1>
        </div>
        <div className="flex flex-col bg-white w-7/12 justify-center">
          <div className="fixed -ml-[54rem]">
            <Map />
          </div>
          <div className="flex flex-col items-center justify-center shadow-2xl border border-gray-400 rounded-3xl self-center p-10 z-10 bg-white">
            <h1 className="font-semibold mb-10 text-xl">Confirm your address</h1>
            <OutlinedInput
              onChange={handleChange('street')}
              style={{
                width: '25rem',
              }}
              placeholder="Street"
            />
            <OutlinedInput
              onChange={handleChange('apt')}
              style={{
                width: '25rem',
              }}
              placeholder="Apt"
            />
            <OutlinedInput
              onChange={handleChange('city')}
              style={{
                width: '25rem',
              }}
              placeholder="City"
            />
            <Autocomplete
              onChange={(event: any, newValue: string | null) => {
                setValue({ ...value, country: newValue });
              }}
              sx={{ width: '25rem' }}
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.name} ({option.code})
                </Box>
              )}
              renderInput={(params) => <TextField {...params} placeholder="Choose a country" />}
            />
          </div>
          <button
            onClick={() => navigate('/')}
            className="absolute top-5 right-5 border w-20 font-semibold text-white p-3 rounded-md duration-300 hover:opacity-90 bg-black shadow-2xl"
          >
            Exit
          </button>
          <div className="absolute bottom-24 w-[11.10%] border-t-4 border-black" />
          <div className="absolute bottom-24 w-6/12 border-t border-gray-800" />
          <button
            onClick={() => setPage(1)}
            className="absolute bottom-5 ml-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
          >
            Back
          </button>
          <button
            onClick={next}
            className="absolute bottom-5 right-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
