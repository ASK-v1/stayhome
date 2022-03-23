import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { GuestsInterface } from '../interfaces';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const cities = ['Los Angeles', 'San Francisco'];

export default function Search() {
  const navigate = useNavigate();

  const [date, setDate] = useState<DateRange<Date>>([null, null]);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const loading = open && options?.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(2000);

      if (active) {
        setOptions(cities);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const [anchorElGuests, setAnchorElGuests] = useState<null | HTMLElement>(null);
  const openGuests = Boolean(anchorElGuests);

  const [value, setValue] = useState<GuestsInterface>({
    adults: 1,
    children: 0,
    infants: 0,
  });

  return (
    <div className="h-screen bg-center bg-cover flex items-center justify-center bg-home">
      <div className="bg-orange-500 flex flex-row items-center gap-4 p-16 rounded shadow-2xl mb-96">
        <Autocomplete
          sx={{
            bgcolor: 'background.paper',
            minWidth: 300,
            borderRadius: 1,
          }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, values) => option === values}
          getOptionLabel={(option) => option}
          options={options}
          loading={loading}
          renderInput={(params) => (
            <TextField
              variant="filled"
              {...params}
              label="Where are you going?"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="Check-in"
            endText="Check-out"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField
                  variant="filled"
                  sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    width: 150,
                  }}
                  {...startProps}
                />
                <Box sx={{ mx: 1, color: 'background.paper' }}> to </Box>
                <TextField
                  variant="filled"
                  sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    width: 150,
                  }}
                  {...endProps}
                />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
        {value.adults + value.children > 1 ? (
          <button
            className="h-14 border border-gray-400 rounded bg-gray-200 w-24 hover:bg-gray-300"
            onClick={(event) => setAnchorElGuests(event.currentTarget)}
          >
            <div className="flex flex-col">
              <h1 className="self-start font-semibold text-left text-gray-900 ml-3 opacity-70 text-xs">
                Guests
              </h1>
              <h1 className="self-start ml-3">{value.adults + value.children} guests</h1>
            </div>
          </button>
        ) : (
          <button
            className="h-14 border border-gray-400 rounded bg-gray-200 w-24 hover:bg-gray-300"
            onClick={(event) => setAnchorElGuests(event.currentTarget)}
          >
            <h1 className="self-start font-semibold text-left text-gray-900 ml-3 opacity-70">
              Guests
            </h1>
          </button>
        )}
        <Menu
          open={openGuests}
          anchorEl={anchorElGuests}
          onClose={() => setAnchorElGuests(null)}
          PaperProps={{
            style: {
              width: 300,
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
              alignItems: 'center',
            },
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', gap: '60px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px' }}>
              <h1 style={{ fontSize: '20px' }}>Adults</h1>
              <h1 style={{ fontSize: '13px', color: 'gray' }}>Ages 13 or above</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '10px' }}>
              {value.adults !== 1 ? (
                <button
                  onClick={() => setValue({ ...value, adults: value.adults - 1 })}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '15px',
                    borderRadius: '20px',
                    height: '2rem',
                    width: '2rem',
                    border: 'solid 1px gray',
                    color: 'black',
                  }}
                >
                  -
                </button>
              ) : (
                <button
                  style={{
                    fontWeight: 'semibold',
                    fontSize: '15px',
                    borderRadius: '20px',
                    height: '2rem',
                    width: '2rem',
                    border: 'solid 1px gray',
                    opacity: '50%',
                    color: 'grey',
                  }}
                >
                  -
                </button>
              )}
              <h1
                style={{
                  marginTop: '4px',
                }}
              >
                {value.adults}
              </h1>
              <button
                style={{
                  fontWeight: 'semibold',
                  fontSize: '15px',
                  borderRadius: '20px',
                  height: '2rem',
                  width: '2rem',
                  border: 'solid 1px gray',
                  color: 'black',
                }}
                onClick={() => setValue({ ...value, adults: value.adults + 1 })}
              >
                +
              </button>
            </div>
          </div>
          <div
            style={{
              borderTop: 'solid 1px',
              borderTopColor: 'gray',
              opacity: '30%',
              width: '20rem',
              marginTop: '15px',
              marginBottom: '15px',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'row', gap: '88px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px' }}>
              <h1 style={{ fontSize: '20px' }}>Children</h1>
              <h1 style={{ fontSize: '13px', color: 'gray' }}>Ages 2–12</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '10px' }}>
              {value.children !== 0 ? (
                <button
                  onClick={() => setValue({ ...value, children: value.children - 1 })}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '15px',
                    borderRadius: '20px',
                    height: '2rem',
                    width: '2rem',
                    border: 'solid 1px gray',
                    color: 'black',
                  }}
                >
                  -
                </button>
              ) : (
                <button
                  style={{
                    fontWeight: 'semibold',
                    fontSize: '15px',
                    borderRadius: '20px',
                    height: '2rem',
                    width: '2rem',
                    border: 'solid 1px gray',
                    opacity: '50%',
                    color: 'grey',
                  }}
                >
                  -
                </button>
              )}
              <h1
                style={{
                  marginTop: '4px',
                }}
              >
                {value.children}
              </h1>
              <button
                style={{
                  fontWeight: 'semibold',
                  fontSize: '15px',
                  borderRadius: '20px',
                  height: '2rem',
                  width: '2rem',
                  border: 'solid 1px gray',
                  color: 'black',
                }}
                onClick={() => setValue({ ...value, children: value.children + 1 })}
              >
                +
              </button>
            </div>
          </div>
          <div
            style={{
              borderTop: 'solid 1px',
              borderTopColor: 'gray',
              opacity: '30%',
              width: '20rem',
              marginTop: '15px',
              marginBottom: '15px',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'row', gap: '103px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px' }}>
              <h1 style={{ fontSize: '20px' }}>Infants</h1>
              <h1 style={{ fontSize: '13px', color: 'gray' }}>Under 2</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '10px' }}>
              {value.infants !== 0 ? (
                <button
                  onClick={() => setValue({ ...value, infants: value.infants - 1 })}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '15px',
                    borderRadius: '20px',
                    height: '2rem',
                    width: '2rem',
                    border: 'solid 1px gray',
                    color: 'black',
                  }}
                >
                  -
                </button>
              ) : (
                <button
                  style={{
                    fontWeight: 'semibold',
                    fontSize: '15px',
                    borderRadius: '20px',
                    height: '2rem',
                    width: '2rem',
                    border: 'solid 1px gray',
                    opacity: '50%',
                    color: 'grey',
                  }}
                >
                  -
                </button>
              )}
              <h1
                style={{
                  marginTop: '4px',
                }}
              >
                {value.infants}
              </h1>
              <button
                style={{
                  fontWeight: 'semibold',
                  fontSize: '15px',
                  borderRadius: '20px',
                  height: '2rem',
                  width: '2rem',
                  border: 'solid 1px gray',
                  color: 'black',
                }}
                onClick={() => setValue({ ...value, infants: value.infants + 1 })}
              >
                +
              </button>
            </div>
          </div>
        </Menu>

        <button
          onClick={() => navigate('/rooms')}
          className="flex flex-row font-semibold ml-3 py-[14px] rounded bg-blue-600 px-6 text-white text-xl shadow-2xl items-center gap-2 hover:bg-blue-500"
        >
          <SearchIcon className="text-2xl"></SearchIcon>
          <p>Search</p>
        </button>
      </div>
    </div>
  );
}
