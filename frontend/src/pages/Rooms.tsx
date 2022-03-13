import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Card from '../components/Card';
import Filters from '../components/Filters';

export default function Rooms() {
  return (
    <div>
      <Navbar />
      <Filters />
      <div className="border-b border-gray-400 w-full mt-5" />
      <h1 className="ml-5 text-gray-800 font-semibold my-5">200+ stays in map area</h1>
      <div className="flex flex-row">
        <div>
          {[1, 2, 3, 4].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
        <div className="w-4/5">
          <Map />
        </div>
      </div>

      <Footer />
    </div>
  );
}
