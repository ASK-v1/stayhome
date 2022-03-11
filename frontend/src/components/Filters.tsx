import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { FiltersInterface } from '../interfaces';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Checkbox from '@mui/material/Checkbox';
import { BecomeHostGuestInterface } from '../interfaces';

export default function Filters() {
  const [filter, setfilter] = useState<FiltersInterface>({
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    entirePlace: false,
    privateRoom: false,
    hotelRoom: false,
    sharedRoom: false,
    wifi: false,
    kitchen: false,
    parking: false,
    washer: false,
    dryer: false,
    gym: false,
    pool: false,
    iron: false,
    balcony: false,
  });

  const handleChange =
    (prop: keyof FiltersInterface) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (
        prop === 'entirePlace' ||
        prop === 'privateRoom' ||
        prop === 'hotelRoom' ||
        prop === 'sharedRoom'
      ) {
        setfilter({ ...filter, [prop]: event.target.checked });
      } else {
        setfilter({ ...filter, [prop]: event.target.value });
      }
    };

  const handleClick = (prop: keyof FiltersInterface) => {
    setfilter({ ...filter, [prop]: !filter[prop] });
  };

  const [anchorElPrice, setAnchorElPrice] = useState<null | HTMLElement>(null);
  const [anchorElRooms, setAnchorElRooms] = useState<null | HTMLElement>(null);
  const [anchorElType, setAnchorElType] = useState<null | HTMLElement>(null);
  const openPrice = Boolean(anchorElPrice);
  const openRooms = Boolean(anchorElRooms);
  const openType = Boolean(anchorElType);

  const [value, setValue] = useState<BecomeHostGuestInterface>({
    guests: 1,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  });

  return (
    <div className="mb-12 mt-5">
      <div className="flex flex-row gap-3 items-center justify-start">
        {openPrice ? (
          <button
            className="active:scale-90 duration-300 text-black border ml-5 rounded-full font-semibold flex flex-row gap-1 justify-center p-2 text-sm w-24 bg-gray-200 border-black"
            onClick={(event) => setAnchorElPrice(event.currentTarget)}
          >
            Price
            {openPrice ? (
              <KeyboardArrowUpIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownIcon fontSize="small" />
            )}
          </button>
        ) : (
          <button
            className="active:scale-90 duration-300 text-gray-800 border border-gray-400 ml-5 rounded-full font-semibold flex flex-row gap-1 justify-center p-2 text-sm w-24 hover:border-black"
            onClick={(event) => setAnchorElPrice(event.currentTarget)}
          >
            Price
            {openPrice ? (
              <KeyboardArrowUpIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownIcon fontSize="small" />
            )}
          </button>
        )}

        {openRooms ? (
          <button
            className="active:scale-90 duration-300 text-black border rounded-full font-semibold flex flex-row gap-1 justify-center p-2 text-sm w-44 bg-gray-200 border-black"
            onClick={(event) => setAnchorElRooms(event.currentTarget)}
          >
            Rooms and beds
            {openRooms ? (
              <KeyboardArrowUpIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownIcon fontSize="small" />
            )}
          </button>
        ) : (
          <button
            className="active:scale-90 duration-300 text-gray-800 border border-gray-400 rounded-full font-semibold flex flex-row gap-1 justify-center p-2 text-sm w-44 hover:border-black"
            onClick={(event) => setAnchorElRooms(event.currentTarget)}
          >
            Rooms and beds
            {openRooms ? (
              <KeyboardArrowUpIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownIcon fontSize="small" />
            )}
          </button>
        )}

        {openType ? (
          <button
            className="active:scale-90 duration-300 text-black border rounded-full font-semibold flex flex-row gap-1 justify-center p-2 text-sm w-36 bg-gray-200 border-black"
            onClick={(event) => setAnchorElType(event.currentTarget)}
          >
            Type of place
            {openType ? (
              <KeyboardArrowUpIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownIcon fontSize="small" />
            )}
          </button>
        ) : (
          <button
            className="active:scale-90 duration-300 text-gray-800 border border-gray-400 rounded-full font-semibold flex flex-row gap-1 justify-center p-2 text-sm w-36 hover:border-black"
            onClick={(event) => setAnchorElType(event.currentTarget)}
          >
            Type of place
            {openType ? (
              <KeyboardArrowUpIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownIcon fontSize="small" />
            )}
          </button>
        )}

        <div className="border-b border-gray-400 w-5 rotate-90" />

        {filter.wifi ? (
          <button
            className="active:scale-90 duration-300 text-black p-2 text-sm border border-black rounded-full font-semibold justify-center w-20 bg-gray-200"
            onClick={() => handleClick('wifi')}
          >
            Wifi
          </button>
        ) : (
          <button
            className="active:scale-90 duration-300 text-gray-800 p-2 text-sm border border-gray-400 rounded-full font-semibold justify-center w-20 hover:border-black"
            onClick={() => handleClick('wifi')}
          >
            Wifi
          </button>
        )}

        {filter.kitchen ? (
          <button
            className="active:scale-90 duration-300 text-black p-2 text-sm border border-black rounded-full font-semibold justify-center w-20 bg-gray-200"
            onClick={() => handleClick('kitchen')}
          >
            Kitchen
          </button>
        ) : (
          <button
            className="active:scale-90 duration-300 text-gray-800 p-2 text-sm border border-gray-400 rounded-full font-semibold justify-center w-20 hover:border-black"
            onClick={() => handleClick('kitchen')}
          >
            Kitchen
          </button>
        )}

        {filter.parking ? (
          <button
            className="active:scale-90 duration-300 text-black p-2 text-sm border border-black rounded-full font-semibold justify-center w-28 bg-gray-200"
            onClick={() => handleClick('parking')}
          >
            Free parking
          </button>
        ) : (
          <button
            className="active:scale-90 duration-300 text-gray-800 p-2 text-sm border border-gray-400 rounded-full font-semibold justify-center w-28 hover:border-black"
            onClick={() => handleClick('parking')}
          >
            Free parking
          </button>
        )}

        {filter.washer ? (
          <button
            className="active:scale-90 duration-300 text-black p-2 text-sm border border-black rounded-full font-semibold justify-center w-20 bg-gray-200"
            onClick={() => handleClick('washer')}
          >
            Washer
          </button>
        ) : (
          <button
            className="active:scale-90 duration-300 text-gray-800 p-2 text-sm border border-gray-400 rounded-full font-semibold justify-center w-20 hover:border-black"
            onClick={() => handleClick('washer')}
          >
            Washer
          </button>
        )}

        {filter.dryer ? (
          <button
            className="active:scale-90 duration-300 text-black p-2 text-sm border border-black rounded-full font-semibold justify-center w-20 bg-gray-200"
            onClick={() => handleClick('dryer')}
          >
            Dryer
          </button>
        ) : (
          <button
            className="active:scale-90 duration-300 text-gray-800 p-2 text-sm border border-gray-400 rounded-full font-semibold justify-center w-20 hover:border-black"
            onClick={() => handleClick('dryer')}
          >
            Dryer
          </button>
        )}

        {filter.iron ? (
          <button
            className="active:scale-90 duration-300 text-black p-2 text-sm border border-black rounded-full font-semibold justify-center w-20 bg-gray-200"
            onClick={() => handleClick('iron')}
          >
            Iron
          </button>
        ) : (
          <button
            className="active:scale-90 duration-300 text-gray-800 p-2 text-sm border border-gray-400 rounded-full font-semibold justify-center w-20 hover:border-black"
            onClick={() => handleClick('iron')}
          >
            Iron
          </button>
        )}

        {filter.gym ? (
          <button
            className="active:scale-90 duration-300 text-black p-2 text-sm border border-black rounded-full font-semibold justify-center w-20 bg-gray-200"
            onClick={() => handleClick('gym')}
          >
            Gym
          </button>
        ) : (
          <button
            className="active:scale-90 duration-300 text-gray-800 p-2 text-sm border border-gray-400 rounded-full font-semibold justify-center w-20 hover:border-black"
            onClick={() => handleClick('gym')}
          >
            Gym
          </button>
        )}

        {filter.pool ? (
          <button
            className="active:scale-90 duration-300 text-black p-2 text-sm border border-black rounded-full font-semibold justify-center w-20 bg-gray-200"
            onClick={() => handleClick('pool')}
          >
            Pool
          </button>
        ) : (
          <button
            className="active:scale-90 duration-300 text-gray-800 p-2 text-sm border border-gray-400 rounded-full font-semibold justify-center w-20 hover:border-black"
            onClick={() => handleClick('pool')}
          >
            Pool
          </button>
        )}

        {filter.balcony ? (
          <button
            className="active:scale-90 duration-300 text-black p-2 text-sm border border-black rounded-full font-semibold justify-center w-20 bg-gray-200"
            onClick={() => handleClick('balcony')}
          >
            Balcony
          </button>
        ) : (
          <button
            className="active:scale-90 duration-300 text-gray-800 p-2 text-sm border border-gray-400 rounded-full font-semibold justify-center w-20 hover:border-black"
            onClick={() => handleClick('balcony')}
          >
            Balcony
          </button>
        )}
      </div>

      <Menu
        open={openPrice}
        anchorEl={anchorElPrice}
        onClose={() => setAnchorElPrice(null)}
        PaperProps={{
          style: {
            width: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <FormControl fullWidth sx={{ m: 1, width: '150px', marginLeft: '25px' }}>
          <InputLabel>min price</InputLabel>
          <OutlinedInput
            type="number"
            value={filter.minPrice}
            onChange={handleChange('minPrice')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="min price"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: '150px', marginLeft: '25px' }}>
          <InputLabel>max price</InputLabel>
          <OutlinedInput
            type="number"
            value={filter.maxPrice}
            onChange={handleChange('maxPrice')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="max price"
          />
        </FormControl>
        <button
          onClick={() => setAnchorElPrice(null)}
          style={{
            backgroundColor: 'black',
            padding: '10px',
            borderRadius: '5px',
            color: 'white',
            marginLeft: '25px',
            width: '9.4rem',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <h1>Save</h1>
        </button>
      </Menu>
      <Menu
        open={openRooms}
        anchorEl={anchorElRooms}
        onClose={() => setAnchorElRooms(null)}
        PaperProps={{
          style: {
            width: 400,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          },
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', gap: '12rem', marginTop: '1rem' }}>
          <h1 style={{ fontSize: '20px' }}>Guests</h1>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
            {value.guests !== 1 ? (
              <button
                onClick={() => setValue({ ...value, guests: value.guests - 1 })}
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
              {value.guests}
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
              onClick={() => setValue({ ...value, guests: value.guests + 1 })}
            >
              +
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '13.1rem', marginTop: '1rem' }}>
          <h1 style={{ fontSize: '20px' }}>Beds</h1>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
            {value.bedrooms !== 1 ? (
              <button
                onClick={() => setValue({ ...value, bedrooms: value.bedrooms - 1 })}
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
              {value.bedrooms}
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
              onClick={() => setValue({ ...value, bedrooms: value.bedrooms + 1 })}
            >
              +
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10.2rem', marginTop: '1rem' }}>
          <h1 style={{ fontSize: '20px' }}>Bedrooms</h1>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
            {value.beds !== 1 ? (
              <button
                onClick={() => setValue({ ...value, beds: value.beds - 1 })}
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
              {value.beds}
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
              onClick={() => setValue({ ...value, beds: value.beds + 1 })}
            >
              +
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '9.8rem', marginTop: '1rem' }}>
          <h1 style={{ fontSize: '20px' }}>Bathrooms</h1>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
            {value.bathrooms !== 1 ? (
              <button
                onClick={() => setValue({ ...value, bathrooms: value.bathrooms - 1 })}
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
              {value.bathrooms}
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
              onClick={() => setValue({ ...value, bathrooms: value.bathrooms + 1 })}
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => setAnchorElRooms(null)}
          style={{
            backgroundColor: 'black',
            padding: '10px',
            borderRadius: '5px',
            color: 'white',
            width: '360px',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          Save
        </button>
      </Menu>
      <Menu
        open={openType}
        anchorEl={anchorElType}
        onClose={() => setAnchorElType(null)}
        PaperProps={{
          style: {
            width: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            padding: '10px',
          },
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Checkbox
            size="medium"
            checked={filter.entirePlace}
            onChange={handleChange('entirePlace')}
            sx={{
              color: 'black',
              '&.Mui-checked': {
                color: 'black',
              },
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h1 style={{ fontSize: '20px' }}>Entire place</h1>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Checkbox
            size="medium"
            checked={filter.privateRoom}
            onChange={handleChange('privateRoom')}
            sx={{
              color: 'black',
              '&.Mui-checked': {
                color: 'black',
              },
            }}
          />
          <h1 style={{ fontSize: '20px' }}>Private room</h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Checkbox
            size="medium"
            checked={filter.hotelRoom}
            onChange={handleChange('hotelRoom')}
            sx={{
              color: 'black',
              '&.Mui-checked': {
                color: 'black',
              },
            }}
          />
          <h1 style={{ fontSize: '20px' }}>Hotel room</h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Checkbox
            size="medium"
            checked={filter.sharedRoom}
            onChange={handleChange('sharedRoom')}
            sx={{
              color: 'black',
              '&.Mui-checked': {
                color: 'black',
              },
            }}
          />
          <h1 style={{ fontSize: '20px' }}>Shared room</h1>
        </div>
        <button
          onClick={() => setAnchorElType(null)}
          style={{
            backgroundColor: 'black',
            padding: '10px',
            borderRadius: '5px',
            color: 'white',
            width: '10rem',
            marginLeft: '10px',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          Save
        </button>
      </Menu>
    </div>
  );
}
