import { useState } from 'react';
import PeopleIcon from '@mui/icons-material/People';
import KingBedIcon from '@mui/icons-material/KingBed';
import ShowerIcon from '@mui/icons-material/Shower';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';

export default function Card() {
  const [value, setValue] = useState<number | null>(3.4);

  return (
    <a href="/room" className="flex group">
      <div className="flex flex-col gap-1">
        <div className="border border-gray-400 w-[50rem] ml-5" />
        <div className="flex flex-row p-5">
          <div className="relative overflow-hidden w-72 h-48">
            <img
              src="https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="bg-cover rounded absolute w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110"
              alt="card"
            />
          </div>
          <div className="flex flex-row gap-24 w-[40rem] ">
            <div className="ml-3 flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="text-gray-500">Lorem ipsum</h1>
                <h1>Lorem ipsum</h1>
              </div>
              <div>
                <div className="flex flex-row gap-6">
                  <div className="sm:inline-flex sm:items-center sm:shrink-0">
                    <PeopleIcon />
                    <div className="sm:ml-2">
                      <p className="text-gray-500 text-sm">Guest</p>
                      <p className="font-medium text-xs text-center">2</p>
                    </div>
                  </div>
                  <div className="sm:inline-flex sm:items-center sm:shrink-0">
                    <KingBedIcon />
                    <div className="sm:ml-2">
                      <p className="text-gray-500 text-sm">Bedroom</p>
                      <p className="font-medium text-xs text-center">2</p>
                    </div>
                  </div>
                  <div className="sm:inline-flex sm:items-center sm:shrink-0">
                    <ShowerIcon />
                    <div className="sm:ml-2">
                      <p className="text-gray-500 text-sm">Bathroom</p>
                      <p className="font-medium text-xs text-center">1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Chip label="Wifi" color="primary" size="small" />
                <Chip label="Washer" color="primary" size="small" />
                <Chip label="Kitchen" color="primary" size="small" />
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Rating
                  className="text-xl text-orange-500"
                  name="read-only"
                  value={value}
                  readOnly
                />
                <h1 className="font-bold text-md">{value}</h1>
              </div>
            </div>
            <div className="flex flex-col self-end">
              <div className="flex flex-row">
                <h1 className="font-extrabold text-xl">$56</h1>
                <h1 className="font-light text-xl">/night</h1>
              </div>
              <h1 className="text-gray-500 font-extrabold text-lg mr-10">$330.5 total</h1>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
