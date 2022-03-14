import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BecomeHostAmenityInterface } from '../../interfaces';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import TvIcon from '@mui/icons-material/Tv';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BalconyIcon from '@mui/icons-material/Balcony';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import IronIcon from '@mui/icons-material/Iron';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import DiningIcon from '@mui/icons-material/Dining';

export default function Amenity({ setPage, setAmenity }) {
  const [value, setValue] = useState<BecomeHostAmenityInterface>({
    wifi: false,
    free: false,
    tv: false,
    microwave: false,
    bathtub: false,
    iron: false,
    pool: false,
    kitchen: false,
    refrigerator: false,
    washer: false,
    dryer: false,
    coffee: false,
    aid: false,
    hangers: false,
    balcony: false,
    freezer: false,
  });

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex items-center h-screen p-20 w-7/12 self-center text-5xl font-black bg-orange-500 text-white">
          <h1>Let guests know what your place has to offer</h1>
        </div>
        <div className="flex flex-col bg-white w-7/12 justify-center">
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="flex flex-row gap-5">
              {value.wifi ? (
                <button
                  onClick={() => setAmenity({ ...value, wifi: !value.wifi })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <WifiIcon fontSize="large" />
                  <h1>Wifi</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, wifi: !value.wifi })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <WifiIcon fontSize="large" />
                  <h1>Wifi</h1>
                </button>
              )}
              {value.kitchen ? (
                <button
                  onClick={() => setAmenity({ ...value, kitchen: !value.kitchen })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <DiningIcon fontSize="large" />
                  <h1>Kitchen</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, kitchen: !value.kitchen })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <DiningIcon fontSize="large" />
                  <h1>Kitchen</h1>
                </button>
              )}
              {value.free ? (
                <button
                  onClick={() => setAmenity({ ...value, free: !value.free })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <LocalParkingIcon fontSize="large" />
                  <h1>Free Parking</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, free: !value.free })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <LocalParkingIcon fontSize="large" />
                  <h1>Free Parking</h1>
                </button>
              )}
              {value.refrigerator ? (
                <button
                  onClick={() => setAmenity({ ...value, refrigerator: !value.refrigerator })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <KitchenIcon fontSize="large" />
                  <h1>Refrigerator</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, refrigerator: !value.refrigerator })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <KitchenIcon fontSize="large" />
                  <h1>Refrigerator</h1>
                </button>
              )}
            </div>
            <div className="flex flex-row gap-5">
              {value.freezer ? (
                <button
                  onClick={() => setAmenity({ ...value, freezer: !value.freezer })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <KitchenIcon fontSize="large" />
                  <h1>Freezer</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, freezer: !value.freezer })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <KitchenIcon fontSize="large" />
                  <h1>Freezer</h1>
                </button>
              )}
              {value.pool ? (
                <button
                  onClick={() => setAmenity({ ...value, pool: !value.pool })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <PoolIcon fontSize="large" />
                  <h1>Pool</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, pool: !value.pool })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <PoolIcon fontSize="large" />
                  <h1>Pool</h1>
                </button>
              )}
              {value.tv ? (
                <button
                  onClick={() => setAmenity({ ...value, tv: !value.tv })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <TvIcon fontSize="large" />
                  <h1>HDTV</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, tv: !value.tv })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <TvIcon fontSize="large" />
                  <h1>HDTV</h1>
                </button>
              )}
              {value.microwave ? (
                <button
                  onClick={() => setAmenity({ ...value, microwave: !value.microwave })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <MicrowaveIcon fontSize="large" />
                  <h1>Microwave</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, microwave: !value.microwave })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <MicrowaveIcon fontSize="large" />
                  <h1>Microwave</h1>
                </button>
              )}
            </div>
            <div className="flex flex-row gap-5">
              {value.bathtub ? (
                <button
                  onClick={() => setAmenity({ ...value, bathtub: !value.bathtub })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <BathtubIcon fontSize="large" />
                  <h1>Bathtub</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, bathtub: !value.bathtub })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <BathtubIcon fontSize="large" />
                  <h1>Bathtub</h1>
                </button>
              )}
              {value.iron ? (
                <button
                  onClick={() => setAmenity({ ...value, iron: !value.iron })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <IronIcon fontSize="large" />
                  <h1>Iron</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, iron: !value.iron })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <IronIcon fontSize="large" />
                  <h1>Iron</h1>
                </button>
              )}
              {value.washer ? (
                <button
                  onClick={() => setAmenity({ ...value, washer: !value.washer })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <LocalLaundryServiceIcon fontSize="large" />
                  <h1>Washer</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, washer: !value.washer })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <LocalLaundryServiceIcon fontSize="large" />
                  <h1>Washer</h1>
                </button>
              )}
              {value.dryer ? (
                <button
                  onClick={() => setAmenity({ ...value, dryer: !value.dryer })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <LocalLaundryServiceIcon fontSize="large" />
                  <h1>Dryer</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, dryer: !value.dryer })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <LocalLaundryServiceIcon fontSize="large" />
                  <h1>Dryer</h1>
                </button>
              )}
            </div>
            <div className="flex flex-row gap-5">
              {value.coffee ? (
                <button
                  onClick={() => setAmenity({ ...value, coffee: !value.coffee })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <CoffeeMakerIcon fontSize="large" />
                  <h1>Coffee</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, coffee: !value.coffee })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <CoffeeMakerIcon fontSize="large" />
                  <h1>Coffee</h1>
                </button>
              )}
              {value.aid ? (
                <button
                  onClick={() => setAmenity({ ...value, aid: !value.aid })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <MedicalServicesIcon fontSize="large" />
                  <h1>First aid</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, aid: !value.aid })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <MedicalServicesIcon fontSize="large" />
                  <h1>First aid</h1>
                </button>
              )}
              {value.balcony ? (
                <button
                  onClick={() => setAmenity({ ...value, balcony: !value.balcony })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <BalconyIcon fontSize="large" />
                  <h1>Balcony</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, balcony: !value.balcony })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <BalconyIcon fontSize="large" />
                  <h1>Balcony</h1>
                </button>
              )}
              {value.hangers ? (
                <button
                  onClick={() => setAmenity({ ...value, hangers: !value.hangers })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <CheckroomIcon fontSize="large" />
                  <h1>Hangers</h1>
                </button>
              ) : (
                <button
                  onClick={() => setAmenity({ ...value, hangers: !value.hangers })}
                  className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-40 flex flex-col items-center gap-5"
                >
                  <CheckroomIcon fontSize="large" />
                  <h1>Hangers</h1>
                </button>
              )}
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="absolute top-5 right-5 border w-20 font-semibold text-white p-3 rounded-md duration-300 hover:opacity-90 bg-black shadow-2xl"
          >
            Exit
          </button>
          <div className="absolute bottom-24 w-[22.20%] border-t-4 border-black" />
          <div className="absolute bottom-24 w-6/12 border-t border-gray-800" />
          <button
            onClick={() => setPage(3)}
            className="absolute bottom-5 ml-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
          >
            Back
          </button>
          <button
            onClick={() => setPage(5)}
            className="absolute bottom-5 right-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
