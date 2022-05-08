import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './pages/Room';
import Profile from './pages/Profile';
import Profiles from './pages/Profiles';
import Personal from './pages/Personal';
import NotFound from './pages/NotFound';
import BecomeHost from './pages/BecomeHost';
import Book from './pages/Book';
import { Routes, Route, Navigate } from 'react-router-dom';
import store from './store';

export default function App() {
  const isAuth = store.useAppSelector((state) => state.user.isAuth);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/:city" element={<Rooms />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profiles/:id" element={<Profiles />} />
        <Route path="/personal" element={isAuth ? <Personal /> : <Navigate replace to="/" />} />
        <Route path="/book" element={<Book />} />
        <Route path="/becomehost" element={isAuth ? <BecomeHost /> : <Navigate replace to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
