import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';

export default function Profile() {
  const url =
    'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  const [from, setFrom] = useState<boolean>(true);
  const [moreHost, setMoreHost] = useState<number>(5);
  const [moreGuest, setMoreGuest] = useState<number>(5);

  const guest = {
    name: 'Brandon',
    date: 'February 2022',
    review:
      'From Guest From Guest From Guest From Guest From Guest From Guest From Guest From Guest From Guest',
  };

  const host = {
    name: 'Jack',
    date: 'March 2022',
    review:
      'From Host From Host From Host From Host From Host From Host From Host From Host From Host From Host From Host From Host From Host From Host From Host From Host ',
  };

  const hosts = [];
  const guests = [];

  for (let i = 0; i < 50; i++) {
    hosts[i] = host;
    guests[i] = guest;
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-row p-20 justify-center gap-20">
        <div className="shadow-2xl border-gray-400 p-10 flex flex-col border items-start rounded-3xl h-[35rem]">
          <Avatar className="p-10 bg-orange-500 text-3xl self-center">B</Avatar>
          <div className="flex flex-row gap-3 items-center mt-5">
            <StarIcon className=" text-orange-500" />
            <h1 className="underline text-lg">20 reviews</h1>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <h1 className="font-bold text-xl text-gray-800 mb-5">
              Brandon confirmed
            </h1>
            <div className="flex flex-row gap-3">
              <CheckCircleIcon className=" text-orange-500" />
              <h1>Identity</h1>
            </div>
            <div className="flex flex-row gap-3">
              <CheckCircleIcon className=" text-orange-500" />
              <h1>Email address</h1>
            </div>
            <div className="flex flex-row gap-3">
              <CheckCircleIcon className=" text-orange-500" />
              <h1>Phone number</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 mb-10">
            <h1 className="font-bold text-3xl">Hi, I’m Brandon</h1>
            <h1 className="text-gray-800">Joined in 2022</h1>
          </div>
          <div className="flex flex-col gap-3 item">
            <h1 className="font-bold text-2xl">About</h1>
            <div className="flex flex-row gap-3 items-center">
              <HomeIcon />
              <h1>Lives in San Francisco, CA</h1>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-2xl mt-10">Brandon’s listings</h1>
            <div className="mt-5">
              <img
                src={url}
                className="rounded-3xl duration-500 w-[20rem] hover:opacity-90 cursor-pointer"
                alt="photos"
              />
              <div className="flex flex-row gap-1 mt-2 items-center">
                <StarIcon />
                <h1>4.5</h1>
                <h1 className="font-bold">(20)</h1>
              </div>
              <h1 className="w-80 mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
          </div>
          <div className="flex flex-row gap-3 mt-10">
            <StarIcon className="text-3xl" />
            <h1 className="text-2xl">100 reviews</h1>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex flex-row gap-5">
              {from ? (
                <button className="text-gray-800 pointer-events-none">
                  From guests (50)
                </button>
              ) : (
                <button
                  className="active:scale-90"
                  onClick={() => setFrom(true)}
                >
                  From guests (50)
                </button>
              )}
              {from ? (
                <button
                  onClick={() => setFrom(false)}
                  className="active:scale-90"
                >
                  From hosts (50)
                </button>
              ) : (
                <button className="pointer-events-none text-gray-800 ">
                  From hosts (50)
                </button>
              )}
            </div>
            <div className="border-b-2 border-gray-400 w-[50rem]" />
          </div>

          <div>
            {from
              ? guests.splice(0, moreGuest).map((guest_) => (
                  <div className="flex flex-row gap-5 mt-10">
                    <Avatar className="p-6 bg-orange-500">B</Avatar>
                    <div className="flex flex-col">
                      <h1 className="font-bold">{guest_.name}</h1>
                      <h1 className="text-gray-800">{guest_.date}</h1>
                      <h1 className="w-[500px] mt-2">{guest_.review}</h1>
                    </div>
                    <img
                      src={url}
                      className="rounded-3xl duration-500 w-32 h-24 hover:opacity-90 cursor-pointer"
                      alt="photos"
                    />
                  </div>
                  // eslint-disable-next-line @typescript-eslint/indent
                ))
              : hosts.splice(0, moreHost).map((host_) => (
                  <div className="flex flex-row gap-5 mt-10">
                    <Avatar className="p-6 bg-orange-500">B</Avatar>
                    <div className="flex flex-col">
                      <h1 className="font-bold">{host_.name}</h1>
                      <h1 className="text-gray-800">{host_.date}</h1>
                      <h1 className="w-[500px] mt-2">{host_.review}</h1>
                    </div>
                    <img
                      src={url}
                      className="rounded-3xl duration-500 w-32 h-24 hover:opacity-90 cursor-pointer"
                      alt="photos"
                    />
                  </div>
                  // eslint-disable-next-line @typescript-eslint/indent
                ))}
            {moreHost !== 50 && (
              <button
                onClick={() => {
                  if (from) setMoreGuest(moreGuest + 5);
                  else setMoreHost(moreHost + 5);
                }}
                className="border w-60 font-bold border-black text-black p-3 rounded-md my-16 ml-60 active:scale-90 duration-300"
              >
                Show more reviews
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
