import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex items-center justify-evenly bg-orange-500 p-3 shadow-2xl">
      <Link to="/">
        <img src={'img/logo.png'} width="200" />
      </Link>
      <div className="flex gap-10 items-center">
        <button className="text-white border border-white p-3 rounded shadow font-extrabold hover:opacity-80">
          Become a Host
        </button>
      </div>
    </div>
  );
}
