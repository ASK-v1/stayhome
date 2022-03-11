import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Price({ setPage }: { setPage: Function }) {
  const navigate = useNavigate();

  const [price, setPrice] = useState<number>(10);

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex items-center h-screen p-20 w-7/12 self-center text-5xl font-black bg-orange-500 text-white">
          <h1>Set your price</h1>
        </div>
        <div className="flex flex-col bg-white w-7/12 self-center">
          <div className="self-center">
            <div className="flex flex-row gap-10">
              {price !== 10 ? (
                <button
                  onClick={() => setPrice(price - 10)}
                  className="font-semibold text-xl rounded-full border border-gray-600 h-12 w-12 hover:border-black mt-8"
                >
                  -
                </button>
              ) : (
                <button className="font-semibold text-xl text-gray-400 rounded-full border border-gray-300 h-12 w-12 cursor-default mt-8">
                  -
                </button>
              )}
              <div className="flex flex-col gap-5 justify-center items-center">
                <h1 className="flex justify-center items-center border border-gray-400 text-center rounded-md h-28 w-80 font-bold text-5xl text-[#222]">
                  ${price}
                </h1>
                <h1 className="text-xl text-gray-800 text-center">per night</h1>
              </div>
              <button
                onClick={() => setPrice(price + 10)}
                className="font-semibold text-xl rounded-full border border-gray-600 h-12 w-12 hover:border-black mt-8"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="absolute top-5 right-5 border w-20 font-semibold text-white p-3 rounded-md duration-300 hover:opacity-90 bg-black shadow-2xl"
          >
            Exit
          </button>
          <div className="z-10 bg-white">
            <div className="absolute bottom-24 w-[44.45%] border-t-4 border-black" />
            <div className="absolute bottom-24 w-6/12 border-t border-gray-800" />
            <button
              onClick={() => setPage(7)}
              className="absolute bottom-5 ml-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
            >
              Back
            </button>
            <button
              onClick={() => setPage(9)}
              className="absolute bottom-5 right-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
