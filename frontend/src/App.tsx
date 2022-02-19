import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './pages/Room';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </div>
  );
}
