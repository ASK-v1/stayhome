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

export default function Description() {
  const items = 9;

  return (
    <div className="flex flex-col w-[40rem] gap-2">
      <h1 className="font-bold text-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit
      </h1>
      <div>
        <h1 className="text-gray-800">6 guests - 2 bedrooms - 1 bath</h1>
      </div>
      <div className="border-gray-400 border-b mt-5" />
      <div className="mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni, itaque ea iusto
        minima laudantium a cumque, nemo voluptas pariatur eveniet. Earum, voluptatem eos.
        Recusandae molestiae nihil praesentium officiis aut?
      </div>
      <div className="border-gray-400 border-b mt-5" />
      <div className="mt-10 flex flex-col gap-3">
        <h1 className="font-bold text-xl mb-5">What this place offers</h1>
        <div className="flex flex-row gap-40">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3 items-center">
              <WifiIcon className="text-gray-800" />
              <h1 className="text-gray-800">Wifi</h1>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <LocalParkingIcon className="text-gray-800" />
              <h1 className="text-gray-800">Free parking</h1>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <TvIcon className="text-gray-800" />
              <h1 className="text-gray-800">HDTV with Netflix</h1>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <MicrowaveIcon className="text-gray-800" />
              <h1 className="text-gray-800">Microwave</h1>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <BathtubIcon className="text-gray-800" />
              <h1 className="text-gray-800">Bathtub</h1>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <IronIcon className="text-gray-800" />
              <h1 className="text-gray-800">Iron</h1>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <PoolIcon className="text-gray-800" />
              <h1 className="text-gray-800">Pool</h1>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <DiningIcon className="text-gray-800" />
              <h1 className="text-gray-800">Dishes and silverware</h1>
            </div>
          </div>
          {items > 8 && (
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3 items-center">
                <KitchenIcon className="text-gray-800" />
                <h1 className="text-gray-800">Refrigerator</h1>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <LocalLaundryServiceIcon className="text-gray-800" />
                <h1 className="text-gray-800">Washer</h1>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <LocalLaundryServiceIcon className="text-gray-800" />
                <h1 className="text-gray-800">Dryer</h1>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <CoffeeMakerIcon className="text-gray-800" />
                <h1 className="text-gray-800">Coffee maker</h1>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MedicalServicesIcon className="text-gray-800" />
                <h1 className="text-gray-800">First aid kit</h1>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <CheckroomIcon className="text-gray-800" />
                <h1 className="text-gray-800">Hangers</h1>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <BalconyIcon className="text-gray-800" />
                <h1 className="text-gray-800">Balcony</h1>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <KitchenIcon className="text-gray-800" />
                <h1 className="text-gray-800">Freezer</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
