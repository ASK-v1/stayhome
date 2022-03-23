import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router';
import { GuestsInterface } from '../interfaces';
import Menu from '@mui/material/Menu';

export default function Reserve({ price }) {
  const rating = 2;

  const navigate = useNavigate();

  const [date, setDate] = useState<DateRange<Date>>([null, null]);

  const [anchorElGuests, setAnchorElGuests] = useState<null | HTMLElement>(null);
  const openGuests = Boolean(anchorElGuests);

  const [value, setValue] = useState<GuestsInterface>({
    adults: 1,
    children: 0,
    infants: 0,
  });

  return (
    <div className="flex flex-col shadow-2xl self-start border rounded-3xl border-gray-400 p-5 h-[33rem]">
      <div className="flex justify-between items-center mb-5">
        <div className="flex flex-row p-3 gap-2 text-xl">
          <h1 className="font-black">${price}</h1>
          <h1>/ night</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Rating className="text-lg text-orange-500" name="read-only" value={rating} readOnly />
          <h1 className="font-semibold">{rating}</h1>
        </div>
      </div>
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

      {value.adults + value.children > 1 ? (
        <button
          className="h-14 border border-gray-400 rounded w-[18.8rem] hover:border-black"
          onClick={(event) => setAnchorElGuests(event.currentTarget)}
        >
          <div className="flex flex-col">
            <h1 className="self-start text-left ml-3 text-xs">Guests</h1>
            <h1 className="self-start ml-3">{value.adults + value.children} guests</h1>
          </div>
        </button>
      ) : (
        <button
          className="h-14 border border-gray-400 text-gray-900 opacity-70 rounded w-[18.8rem] hover:border-black"
          onClick={(event) => setAnchorElGuests(event.currentTarget)}
        >
          <h1 className="self-start text-left ml-3">Guests</h1>
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
        onClick={() => navigate('/book')}
        className="font-semibold border-black bg-black hover:opacity-90 text-white  w-[300px] h-12 mt-5 rounded duration-300"
      >
        Reserve
      </button>
      <div className="flex flex-col gap-3 mt-10">
        <div className="flex flex-row justify-between">
          <h1 className="underline text-gray-800">$151 x 3 nights</h1>
          <h1 className="font-semibold">$452</h1>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="underline text-gray-800">Cleaning fee</h1>
          <h1 className="font-semibold">$99</h1>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="underline text-gray-800">Service fee</h1>
          <h1 className="font-semibold">$99</h1>
        </div>
      </div>
      <div className="border-gray-400 border-b mt-5" />
      <div className="flex flex-row justify-between mt-5 text-lg font-bold">
        <h1>Total before taxes</h1>
        <h1>$552</h1>
      </div>
    </div>
  );
}
