import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Photos from '../components/Photos';
import Reserve from '../components/Reserve';
import Description from '../components/Description';

export default function Room() {
  return (
    <div>
      <Navbar />
      <Photos />
      <div className="flex flex-row justify-center gap-64 mb-40">
        <Description />
        <Reserve />
      </div>
      <Footer />
    </div>
  );
}
