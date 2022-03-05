import { useState } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';

export default function BecomeHost() {
  const [opacity, setOpacity] = useState<number>();
  const navigate = useNavigate();

  const wait = (delay: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  };

  const nextSection = async () => {
    setOpacity(60);
    await wait(333);
    setOpacity(40);
    await wait(333);
    setOpacity(20);
    await wait(333);
    setOpacity(10);
    navigate('/');
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className={`flex flex-row bg-cover opacity-${opacity} duration-1000`}>
          <div className="bg-black z-10">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <img
                  className="hover:scale-90 hover:rounded-3xl duration-700"
                  src={'img/bah-1.jpg'}
                  alt="host"
                  width="300"
                />
                <img
                  className="hover:scale-90 hover:rounded-3xl duration-700"
                  src={'img/bah-2.jpg'}
                  alt="host"
                  width="300"
                />
                <img
                  className="hover:scale-90 hover:rounded-3xl duration-700"
                  src={'img/bah-3.jpg'}
                  alt="host"
                  width="300"
                />
              </div>
              <div className="flex flex-row">
                <img
                  className="hover:scale-90 hover:rounded-3xl duration-700"
                  src={'img/bah-4.jpg'}
                  alt="host"
                  width="300"
                />
                <img
                  className="hover:scale-90 hover:rounded-3xl duration-700"
                  src={'img/bah-5.jpg'}
                  alt="host"
                  width="300"
                />
                <img
                  className="hover:scale-90 hover:rounded-3xl duration-700"
                  src={'img/bah-6.jpg'}
                  alt="host"
                  width="300"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="p-60 text-4xl font-black bg-black text-white">
              What kind of place will you host?
            </h1>
            <button
              onClick={nextSection}
              className="border w-20 font-semibold border-black text-black self-center p-3 rounded-md duration-300 hover:bg-black hover:text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
