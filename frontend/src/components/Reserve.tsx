import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';

export default function Reserve() {
  const rating = 2;

  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  const [guest, setGuest] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setGuest(event.target.value);
  };

  return (
    <div className="flex flex-col shadow-2xl self-start border rounded-3xl border-gray-400 p-5 h-[33rem]">
      <div className="flex justify-between items-center mb-5">
        <div className="flex flex-row p-3 gap-2 text-xl">
          <h1 className="font-rowdies">$511</h1>
          <h1>/ night</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Rating
            className="text-lg text-orange-500"
            name="read-only"
            value={rating}
            readOnly
          />
          <h1 className="font-extrabold">{rating}</h1>
        </div>
      </div>
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
      <div>
        <FormControl>
          <Select
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 1,
              minWidth: 300,
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
      <button className="font-bold border-black bg-black hover:opacity-90 text-white  w-[300px] h-12 mt-5 rounded duration-300">
        Reserve
      </button>
      <div className="flex flex-col gap-3 mt-10">
        <div className="flex flex-row justify-between">
          <h1 className="underline text-gray-800">$151 x 3 nights</h1>
          <h1 className="font-bold">$452</h1>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="underline text-gray-800">Cleaning fee</h1>
          <h1 className="font-bold">$99</h1>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="underline text-gray-800">Service fee</h1>
          <h1 className="font-bold">$99</h1>
        </div>
      </div>
      <div className="border-t-gray-400 border mt-5" />
      <div className="flex flex-row justify-between mt-5 text-lg font-extrabold">
        <h1>Total before taxes</h1>
        <h1>$552</h1>
      </div>
    </div>
  );
}
