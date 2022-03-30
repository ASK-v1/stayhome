import Menu from '@mui/material/Menu';
import { useEffect, useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { FiltersInterface } from '../interfaces';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Checkbox from '@mui/material/Checkbox';
import { getFilter } from '../store/userAction';
import store from '../store';
import { useParams } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';

export default function Filters() {
  const dispatch = store.useAppDispatch();
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  const [filter, setfilter] = useState<FiltersInterface>({
    minPrice: null,
    maxPrice: null,
    entirePlace: false,
    privateRoom: false,
    hotelRoom: false,
    sharedRoom: false,
    wifi: false,
    kitchen: false,
    parking: false,
    washer: false,
    dryer: false,
    tv: false,
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
  const [anchorElType, setAnchorElType] = useState<null | HTMLElement>(null);
  const openPrice = Boolean(anchorElPrice);
  const openType = Boolean(anchorElType);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await dispatch(getFilter(filter, params.city));
      setLoading(false);
    })();
  }, [
    filter.dryer,
    filter.balcony,
    filter.iron,
    filter.kitchen,
    filter.parking,
    filter.pool,
    filter.tv,
    filter.wifi,
    filter.washer,
  ]);

  const getRooms = async (amenity?: keyof FiltersInterface) => {
    setAnchorElType(null);
    setAnchorElPrice(null);
    handleClick(amenity);
    setLoading(true);
    await dispatch(getFilter(filter, params.city));
    setLoading(false);
  };

  return (
    <div className="bg-white p-5">
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
      <div className="flex flex-row gap-3 items-center justify-start">
        {openPrice ? (
          <button
            className="active:scale-90 duration-300 text-black border rounded-full font-semibold flex flex-row gap-1 justify-center p-2 text-sm w-24 bg-gray-200 border-black"
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
            className="active:scale-90 duration-300 text-gray-800 border border-gray-400 rounded-full font-semibold flex flex-row gap-1 justify-center p-2 text-sm w-24 hover:border-black"
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

        {filter.tv ? (
          <button
            className="active:scale-90 duration-300 text-black p-2 text-sm border border-black rounded-full font-semibold justify-center w-20 bg-gray-200"
            onClick={() => handleClick('tv')}
          >
            TV
          </button>
        ) : (
          <button
            className="active:scale-90 duration-300 text-gray-800 p-2 text-sm border border-gray-400 rounded-full font-semibold justify-center w-20 hover:border-black"
            onClick={() => handleClick('tv')}
          >
            TV
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
            width: '11rem',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <FormControl fullWidth sx={{ m: 1, width: '10rem' }}>
          <InputLabel>min price</InputLabel>
          <OutlinedInput
            type="number"
            value={filter.minPrice}
            onChange={handleChange('minPrice')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="min price"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: '10rem' }}>
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
          onClick={() => getRooms()}
          style={{
            backgroundColor: 'black',
            padding: '10px',
            borderRadius: '5px',
            color: 'white',
            width: '10rem',
            marginTop: '10px',
            marginLeft: '8px',
          }}
        >
          <h1>Save</h1>
        </button>
      </Menu>

      <Menu
        open={openType}
        anchorEl={anchorElType}
        onClose={() => setAnchorElType(null)}
        PaperProps={{
          style: {
            width: '11.2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
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
          onClick={() => getRooms()}
          style={{
            backgroundColor: 'black',
            padding: '10px',
            borderRadius: '5px',
            color: 'white',
            width: '10rem',
            marginLeft: '10px',
            marginTop: '10px',
          }}
        >
          Save
        </button>
      </Menu>
    </div>
  );
}
