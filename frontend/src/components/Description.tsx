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

export default function Description({ description, amenity, guest, title }) {
  return (
    <div className="flex flex-col w-[40rem] gap-2">
      <h1 className="font-bold text-xl">{title}</h1>
      <div className="flex flex-row gap-1">
        <h1 className="text-gray-800">{guest && guest.guests} guests -</h1>
        <h1 className="text-gray-800">{guest && guest.bedrooms} bedrooms -</h1>
        <h1 className="text-gray-800">{guest && guest.beds} beds -</h1>
        <h1 className="text-gray-800">{guest && guest.bathrooms} bath</h1>
      </div>
      <div className="border-gray-400 border-b mt-5" />
      <div className="mt-5">{description}</div>
      <div className="border-gray-400 border-b mt-5" />
      <div className="mt-10 flex flex-col gap-3">
        <h1 className="font-bold text-xl mb-5">What this place offers</h1>
        <div className="flex flex-col gap-3 flex-wrap h-72">
          {amenity && amenity.wifi && (
            <div className="flex flex-row gap-3 items-center">
              <WifiIcon className="text-gray-800" />
              <h1 className="text-gray-800">Wifi</h1>
            </div>
          )}
          {amenity && amenity.free && (
            <div className="flex flex-row gap-3 items-center">
              <LocalParkingIcon className="text-gray-800" />
              <h1 className="text-gray-800">Free parking</h1>
            </div>
          )}
          {amenity && amenity.tv && (
            <div className="flex flex-row gap-3 items-center">
              <TvIcon className="text-gray-800" />
              <h1 className="text-gray-800">HDTV with Netflix</h1>
            </div>
          )}
          {amenity && amenity.microwave && (
            <div className="flex flex-row gap-3 items-center">
              <MicrowaveIcon className="text-gray-800" />
              <h1 className="text-gray-800">Microwave</h1>
            </div>
          )}
          {amenity && amenity.bathtub && (
            <div className="flex flex-row gap-3 items-center">
              <BathtubIcon className="text-gray-800" />
              <h1 className="text-gray-800">Bathtub</h1>
            </div>
          )}
          {amenity && amenity.iron && (
            <div className="flex flex-row gap-3 items-center">
              <IronIcon className="text-gray-800" />
              <h1 className="text-gray-800">Iron</h1>
            </div>
          )}
          {amenity && amenity.pool && (
            <div className="flex flex-row gap-3 items-center">
              <PoolIcon className="text-gray-800" />
              <h1 className="text-gray-800">Pool</h1>
            </div>
          )}
          {amenity && amenity.kitchen && (
            <div className="flex flex-row gap-3 items-center">
              <DiningIcon className="text-gray-800" />
              <h1 className="text-gray-800">Dishes and silverware</h1>
            </div>
          )}
          {amenity && amenity.refrigerator && (
            <div className="flex flex-row gap-3 items-center">
              <KitchenIcon className="text-gray-800" />
              <h1 className="text-gray-800">Refrigerator</h1>
            </div>
          )}
          {amenity && amenity.washer && (
            <div className="flex flex-row gap-3 items-center">
              <LocalLaundryServiceIcon className="text-gray-800" />
              <h1 className="text-gray-800">Washer</h1>
            </div>
          )}
          {amenity && amenity.dryer && (
            <div className="flex flex-row gap-3 items-center">
              <LocalLaundryServiceIcon className="text-gray-800" />
              <h1 className="text-gray-800">Dryer</h1>
            </div>
          )}
          {amenity && amenity.coffee && (
            <div className="flex flex-row gap-3 items-center">
              <CoffeeMakerIcon className="text-gray-800" />
              <h1 className="text-gray-800">Coffee maker</h1>
            </div>
          )}
          {amenity && amenity.aid && (
            <div className="flex flex-row gap-3 items-center">
              <MedicalServicesIcon className="text-gray-800" />
              <h1 className="text-gray-800">First aid kit</h1>
            </div>
          )}
          {amenity && amenity.hangers && (
            <div className="flex flex-row gap-3 items-center">
              <CheckroomIcon className="text-gray-800" />
              <h1 className="text-gray-800">Hangers</h1>
            </div>
          )}
          {amenity && amenity.balcony && (
            <div className="flex flex-row gap-3 items-center">
              <BalconyIcon className="text-gray-800" />
              <h1 className="text-gray-800">Balcony</h1>
            </div>
          )}
          {amenity && amenity.freezer && (
            <div className="flex flex-row gap-3 items-center">
              <KitchenIcon className="text-gray-800" />
              <h1 className="text-gray-800">Freezer</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
