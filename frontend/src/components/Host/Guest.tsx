import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BecomeHostGuestInterface } from '../../interfaces';

export default function Guest({ setPage, setGuest }) {
  const [value, setValue] = useState<BecomeHostGuestInterface>({
    guests: 1,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  });

  const navigate = useNavigate();

  const next = () => {
    setGuest(value);
    setPage(4);
  };

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex items-center h-screen p-20 w-7/12 self-center text-5xl font-black bg-orange-500 text-white">
          <h1>How many guests would you like to welcome?</h1>
        </div>
        <div className="flex flex-col bg-white w-7/12 justify-center">
          <div className="flex flex-col items-center justify-center shadow-2xl border border-gray-400 rounded-3xl self-center p-10 gap-10 bg-white">
            <div className="flex flex-row items-center gap-[18rem]">
              <h1 className="font-bold text-2xl">Guests</h1>
              <div className="flex flex-row gap-5">
                {value.guests !== 1 ? (
                  <button
                    onClick={() => setValue({ ...value, guests: value.guests - 1 })}
                    className="font-semibold text-xl rounded-full border border-gray-600 h-10 w-10 hover:border-black"
                  >
                    -
                  </button>
                ) : (
                  <button className="font-semibold text-xl text-gray-400 rounded-full border border-gray-300 h-10 w-10 cursor-default">
                    -
                  </button>
                )}
                <h1 className="mt-2">{value.guests}</h1>
                <button
                  onClick={() => setValue({ ...value, guests: value.guests + 1 })}
                  className="font-semibold text-xl rounded-full border border-gray-600 h-10 w-10 hover:border-black"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[15.5rem]">
              <h1 className="font-bold text-2xl">Bedrooms</h1>
              <div className="flex flex-row gap-5">
                {value.bedrooms !== 1 ? (
                  <button
                    onClick={() => setValue({ ...value, bedrooms: value.bedrooms - 1 })}
                    className="font-semibold text-xl rounded-full border border-gray-600 h-10 w-10 hover:border-black"
                  >
                    -
                  </button>
                ) : (
                  <button className="font-semibold text-xl text-gray-400 rounded-full border border-gray-300 h-10 w-10 cursor-default">
                    -
                  </button>
                )}
                <h1 className="mt-2">{value.bedrooms}</h1>
                <button
                  onClick={() => setValue({ ...value, bedrooms: value.bedrooms + 1 })}
                  className="font-semibold text-xl rounded-full border border-gray-600 h-10 w-10 hover:border-black"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[19.2rem]">
              <h1 className="font-bold text-2xl">Beds</h1>
              <div className="flex flex-row gap-5">
                {value.beds !== 1 ? (
                  <button
                    onClick={() => setValue({ ...value, beds: value.beds - 1 })}
                    className="font-semibold text-xl rounded-full border border-gray-600 h-10 w-10 hover:border-black"
                  >
                    -
                  </button>
                ) : (
                  <button className="font-semibold text-xl text-gray-400 rounded-full border border-gray-300 h-10 w-10 cursor-default">
                    -
                  </button>
                )}
                <h1 className="mt-2">{value.beds}</h1>
                <button
                  onClick={() => setValue({ ...value, beds: value.beds + 1 })}
                  className="font-semibold text-xl rounded-full border border-gray-600 h-10 w-10 hover:border-black"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[15rem]">
              <h1 className="font-bold text-2xl">Bathrooms</h1>
              <div className="flex flex-row gap-5">
                {value.bathrooms !== 1 ? (
                  <button
                    onClick={() => setValue({ ...value, bathrooms: value.bathrooms - 1 })}
                    className="font-semibold text-xl rounded-full border border-gray-600 h-10 w-10 hover:border-black"
                  >
                    -
                  </button>
                ) : (
                  <button className="font-semibold text-xl text-gray-400 rounded-full border border-gray-300 h-10 w-10 cursor-default">
                    -
                  </button>
                )}
                <h1 className="mt-2">{value.bathrooms}</h1>
                <button
                  onClick={() => setValue({ ...value, bathrooms: value.bathrooms + 1 })}
                  className="font-semibold text-xl rounded-full border border-gray-600 h-10 w-10 hover:border-black"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="absolute top-5 right-5 border w-20 font-semibold text-white p-3 rounded-md duration-300 hover:opacity-90 bg-black shadow-2xl"
          >
            Exit
          </button>
          <div className="absolute bottom-24 w-[16.65%] border-t-4 border-black" />
          <div className="absolute bottom-24 w-6/12 border-t border-gray-800" />
          <button
            onClick={() => setPage(2)}
            className="absolute bottom-5 ml-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
          >
            Back
          </button>
          <button
            onClick={next}
            className="absolute bottom-5 right-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
