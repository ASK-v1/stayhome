import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Card from '../components/Card';

export default function Rooms() {
  return (
    <div>
      <Navbar />
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
