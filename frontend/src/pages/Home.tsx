import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Search />
      <Footer />
    </div>
  );
}
