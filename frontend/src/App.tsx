import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './pages/Room';
import Profile from './pages/Profile';
import Personal from './pages/Personal';
import NotFound from './pages/NotFound';
import BecomeHost from './pages/BecomeHost';
import Book from './pages/Book';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room" element={<Room />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/book" element={<Book />} />
        <Route path="/BecomeHost" element={<BecomeHost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
