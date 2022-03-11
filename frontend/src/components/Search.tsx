import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const cities = ['Amsterdam', 'Berlin', 'Bursa', 'Chicago', 'London', 'San Francisco'];

export default function Search() {
  const navigate = useNavigate();

  const [value, setValue] = useState<DateRange<Date>>([null, null]);

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
              {...params}
              placeholder="Where are you going?"
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
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField
                  sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    width: 150,
                  }}
                  {...startProps}
                />
                <Box sx={{ mx: 1, color: 'background.paper' }}> to </Box>
                <TextField
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
