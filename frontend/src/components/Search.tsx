import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const cities = [
  'Amsterdam',
  'Berlin',
  'Bursa',
  'Chicago',
  'London',
  'San Francisco',
];

export default function Search() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  const [guest, setGuest] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setGuest(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<string[]>([]);
  const loading = open && options?.length === 0;

  React.useEffect(() => {
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

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <div className="h-screen bg-cover flex items-center justify-center bg-home">
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
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
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
                  placeholder="Check-in"
                  sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    width: 150,
                  }}
                  {...startProps}
                />
                <Box sx={{ mx: 1, color: 'background.paper' }}> to </Box>
                <TextField
                  placeholder="Check-out"
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
        <div>
          <FormControl>
            <Select
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 1,
                minWidth: 100,
              }}
              value={guest}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem disabled value="">
                <p className=" text-gray-700">Guest</p>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </div>
        <button className="font-extrabold ml-6 py-4 rounded bg-blue-600 px-10 text-white text-xl shadow-xl hover:bg-black duration-200 ease-in-out transform hover:scale-110">
          Search
        </button>
      </div>
    </div>
  );
}
