import { useNavigate } from 'react-router';
import TextField from '@mui/material/TextField';

export default function Description({ setPage, setDescription }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex items-center h-screen p-20 w-7/12 self-center text-5xl font-black bg-orange-500 text-white">
          <h1>Let's describe your place</h1>
        </div>
        <div className="flex flex-col bg-white w-7/12 self-center">
          <div className="self-center">
            <h1 className="mb-5 font-semibold text-2xl">Create your description</h1>
            <TextField multiline rows={6} fullWidth sx={{ width: '500px' }} />
          </div>
          <button
            onClick={() => navigate('/')}
            className="absolute top-5 right-5 border w-20 font-semibold text-white p-3 rounded-md duration-300 hover:opacity-90 bg-black shadow-2xl"
          >
            Exit
          </button>
          <div className="z-10 bg-white">
            <div className="absolute bottom-24 w-[38.85%] border-t-4 border-black" />
            <div className="absolute bottom-24 w-6/12 border-t border-gray-800" />
            <button
              onClick={() => setPage(6)}
              className="absolute bottom-5 ml-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
            >
              Back
            </button>
            <button
              onClick={() => setPage(8)}
              className="absolute bottom-5 right-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
