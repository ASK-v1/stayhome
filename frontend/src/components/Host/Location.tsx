import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { BecomeHostLocationInterface } from '../../interfaces';
import { OutlinedInput } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Map from '../Map/HostMap';
import { states } from './states';
import store from '../../store';
import { setCoordinate } from '../../store/userAction';

export default function Location({ setPage, setLocation }) {
  const [value, setValue] = useState<BecomeHostLocationInterface>({
    country: '',
    street: '',
    city: '',
    state: null,
    apt: '',
    coordinate: null,
  });

  const navigate = useNavigate();

  const position = store.useAppSelector((state) => state.user.coordinate);
  const dispatch = store.useAppDispatch();

  useEffect(() => {
    setValue({ ...value, coordinate: position });
  }, [position]);

  const handleChange =
    (props: keyof BecomeHostLocationInterface) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue({ ...value, [props]: event.target.value });
    };

  const next = () => {
    if (value.state) {
      setLocation(value);
      setPage(3);
    }
  };

  const [second, setSecond] = useState<boolean>(false);

  const good = () => {
    if (value.state) {
      setSecond(true);
      dispatch(setCoordinate({ lat: value.state.latitude, lng: value.state.longitude }));
    }
    return;
  };

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex items-center h-screen p-20 w-7/12 self-center text-5xl font-black bg-orange-500 text-white z-50">
          {second ? <h1>Is the pin in the right spot?</h1> : <h1>Where's your place located?</h1>}
        </div>
        <div className="flex flex-col bg-white w-7/12 justify-center">
          {second && (
            <div className="fixed -ml-[54rem]">
              <Map position={position} />
            </div>
          )}
          {!second && (
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
                onChange={(
                  event: any,
                  newValue: { state: string; latitude: number; longitude: number } | null,
                ) => {
                  setValue({ ...value, state: newValue });
                }}
                sx={{ width: '25rem' }}
                options={states}
                autoHighlight
                getOptionLabel={(option) => option.state}
                renderInput={(params) => <TextField {...params} placeholder="State" />}
              />
              <button
                onClick={good}
                className="border w-32 mt-10 self-start font-semibold text-white p-3 rounded-md duration-300 hover:opacity-90 bg-black shadow-2xl"
              >
                Looks good
              </button>
            </div>
          )}
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
          {second && (
            <button
              onClick={next}
              className="absolute bottom-5 right-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
