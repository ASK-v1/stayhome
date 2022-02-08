import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PeopleIcon from '@mui/icons-material/People';
import KingBedIcon from '@mui/icons-material/KingBed';
import ShowerIcon from '@mui/icons-material/Shower';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Chip from '@mui/material/Chip';

export default function Homes() {
  const [value, setValue] = useState<number | null>(2);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
            <a href="" className="flex group mb-5">
              <div className="flex flex-row shadow-lg p-5">
                <div className="relative overflow-hidden w-72 h-48">
                  <img
                    src="https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="bg-cover rounded absolute w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-row gap-24">
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
                    <div className="flex flex-row gap-3">
                      <Rating
                        className="text-xl text-orange-500"
                        name="read-only"
                        value={value}
                        readOnly
                      />
                      <h1 className="font-extrabold">{value}</h1>
                      <h5>(10 reviews)</h5>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <FavoriteBorderIcon className="text-3xl self-end" />
                    <div className="flex flex-col">
                      <div className="flex flex-row">
                        <h1 className="font-extrabold text-xl">$56</h1>
                        <h1 className="font-light text-xl">/night</h1>
                      </div>
                      <h1 className="text-gray-500 font-extrabold text-lg">
                        $330.5 total
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div>
          <h1 className="text-5xl self-center">MAP</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
