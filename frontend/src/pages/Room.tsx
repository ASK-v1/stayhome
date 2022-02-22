import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Photos from '../components/Photos';
import Reserve from '../components/Reserve';
import Description from '../components/Description';
import Reviews from '../components/Reviews';
import Map from '../components/Map';
import Contact from '../components/Contact';
import { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';

export default function Room() {
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
    <div className=" scroll-smooth">
      {scrollPosition > 1050 && (
        <div className="flex flex-row justify-evenly items-center p-3 w-full bg-white fixed z-10 border-b border-gray-400">
          <div className="flex flex-row gap-5 font-bold">
            <div className="flex flex-col group">
              <a href="photos" onClick={handleClick}>
                Photos
              </a>
              <div className="group-hover:border-2 border-black top-6 relative"></div>
            </div>
            <div className="flex flex-col group">
              <a href="amenities" onClick={handleClick}>
                Amenities
              </a>
              <div className="group-hover:border-2 border-black top-6 relative"></div>
            </div>
            <div className="flex flex-col group">
              <a href="reviews" onClick={handleClick}>
                Reviews
              </a>
              <div className="group-hover:border-2 border-black top-6 relative"></div>
            </div>
            <div className="flex flex-col group">
              <a href="location" onClick={handleClick}>
                Location
              </a>
              <div className="group-hover:border-2 border-black top-6 relative"></div>
            </div>
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
      <Navbar />
      <div id="photos">
        <Photos />
      </div>
      <div className="flex flex-col" id="amenities">
        <div className="flex flex-row justify-center gap-64">
          <Description />
          <Reserve />
        </div>
        <div className="border-t-gray-400 border mt-10 w-[77rem] self-center" />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div className="flex flex-col items-center" id="location">
        <div className="border-t-gray-400 border w-[77rem] self-center" />
        <h1 className="text-xl font-bold mt-10 mb-5">Where you’ll be</h1>
        <div className="self-center justify-self-center mr-[1228px]">
          <Map />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
