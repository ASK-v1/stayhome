import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <div className="flex items-center justify-around bg-orange-500 p-3 shadow-2xl">
      <Link to="/">
        <img src={'img/logo.png'} width="200" />
      </Link>
      <div className="flex gap-10 items-center">
        <Button className="p-3 border-white text-white" variant="outlined">
          Become Host
        </Button>
      </div>
    </div>
  );
}
