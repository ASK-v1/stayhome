import { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';

export default function Topbar() {
  const rating = 2;

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.getElementById(target).offsetTop;

    window.scrollTo({
      top: location,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {scrollPosition > 1050 && (
        <div className="flex flex-row justify-evenly items-center p-3 w-full bg-white fixed z-10 border-b border-gray-400">
          <div className="flex flex-row gap-5 font-bold">
            <a
              className="hover:text-orange-500 duration-300"
              href="photos"
              onClick={handleClick}
            >
              Photos
            </a>
            <a
              className="hover:text-orange-500 duration-300"
              href="amenities"
              onClick={handleClick}
            >
              Amenities
            </a>
            <a
              className="hover:text-orange-500 duration-300"
              href="reviews"
              onClick={handleClick}
            >
              Reviews
            </a>
            <a
              className="hover:text-orange-500 duration-300"
              href="location"
              onClick={handleClick}
            >
              Location
            </a>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col items-start gap-1">
              <div className="flex flex-row gap-2 text-xl">
                <h1 className="font-rowdies">$511</h1>
                <h1>/ night</h1>
              </div>
              <div className="flex gap-3 items-center">
                <Rating
                  className="text-lg text-orange-500"
                  name="read-only"
                  value={rating}
                  readOnly
                />
                <h1 className="font-bold">{rating}</h1>
              </div>
            </div>
            <button className="bg-black text-white w-28 rounded hover:opacity-90 font-bold shadow-lg">
              Reserve
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
