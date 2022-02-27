import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Photos from '../components/Photos';
import Reserve from '../components/Reserve';
import Description from '../components/Description';
import Reviews from '../components/Reviews';
import Map from '../components/Map';
import Contact from '../components/Contact';
import Topbar from '../components/Topbar';
import { useState } from 'react';

export default function Room() {
  const [reviews, setReviews] = useState<boolean>(false);

  return (
    <div>
      <Topbar />
      <Navbar />
      <div id="photos">
        <Photos setReviews={setReviews} />
      </div>
      <div className="flex flex-col" id="amenities">
        <div className="flex flex-row justify-center gap-64">
          <Description />
          <Reserve />
        </div>
        <div className="border-t-gray-400 border mt-10 w-[77rem] self-center" />
      </div>
      <div id="reviews">
        <Reviews reviews={reviews} setReviews={setReviews} />
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
