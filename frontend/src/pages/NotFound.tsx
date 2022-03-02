import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col text-center bg-notfound bg-cover h-screen">
      <h1 className="text-[25rem] font-black text-white opacity-50">404</h1>
      <h1 className="text-white text-4xl mb-20">The page you were looking for doesn't exist.</h1>
      <Link to={'/'} className="bg-orange-500 self-center p-5 shadow-2xl rounded-full w-60 ">
        <h1 className="font-bold text-lg text-white">GO TO HOMEPAGE</h1>
      </Link>
    </div>
  );
}
