import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BecomeHostTypeInterface } from '../../interfaces';

export default function Space({ setPage }: { setPage: Function }) {
  const [type, setType] = useState<BecomeHostTypeInterface>({
    entirePlace: false,
    privateRoom: false,
    hotelRoom: false,
    sharedRoom: false,
  });

  const navigate = useNavigate();

  const handleClick = (prop: keyof BecomeHostTypeInterface) => () => {
    setType({
      entirePlace: false,
      privateRoom: false,
      hotelRoom: false,
      sharedRoom: false,
      [prop]: true,
    });
  };

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex items-center h-screen p-20 w-7/12 self-center text-5xl font-black bg-orange-500 text-white">
          <h1>What kind of space will guests have?</h1>
        </div>
        <div className="flex flex-col bg-white w-7/12 justify-center">
          <div className="flex flex-col gap-3 items-center justify-center my-10">
            {type.entirePlace ? (
              <button className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-80">
                An entire place
              </button>
            ) : (
              <button
                onClick={handleClick('entirePlace')}
                className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-80"
              >
                An entire place
              </button>
            )}
            {type.sharedRoom ? (
              <button className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-80">
                A shared room
              </button>
            ) : (
              <button
                onClick={handleClick('sharedRoom')}
                className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-80"
              >
                A shared room
              </button>
            )}
            {type.privateRoom ? (
              <button className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-80">
                A private room
              </button>
            ) : (
              <button
                onClick={handleClick('privateRoom')}
                className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-80"
              >
                A private room
              </button>
            )}
            {type.hotelRoom ? (
              <button className="hover:border-black duration-300 text-xl border-2 border-gray-800 p-5 bg-gray-200 rounded-md w-80">
                A hotel room
              </button>
            ) : (
              <button
                onClick={handleClick('hotelRoom')}
                className="hover:border-black duration-300 text-xl border-2 border-gray-400 p-5 rounded-md w-80"
              >
                A hotel room
              </button>
            )}
          </div>
          <button
            onClick={() => navigate('/')}
            className="absolute top-5 right-5 border w-20 font-semibold text-white p-3 rounded-md duration-300 hover:opacity-90 bg-black shadow-2xl"
          >
            Exit
          </button>
          <div className="absolute bottom-24 w-[5.55%] border-t-4 border-black" />
          <div className="absolute bottom-24 w-6/12 border-t border-gray-800" />
          <button
            onClick={() => setPage(2)}
            className="absolute bottom-5 right-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
