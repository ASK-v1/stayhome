import { useNavigate } from 'react-router';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Input = styled('input')({ display: 'none' });

export default function Photos({ setPage }: { setPage: Function }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex items-center h-screen p-20 w-7/12 self-center text-5xl font-black bg-orange-500 text-white">
          <h1>Add some photos of your place</h1>
        </div>
        <div className="flex flex-col bg-white w-7/12 justify-start mt-10">
          <div className="flex gap-10 flex-col self-center">
            <h1 className="text-2xl text-center font-bold">Add at least 5 photos</h1>
            <label>
              <Input accept="image/*" multiple type="file" />
              <Button
                sx={{
                  border: 'solid 1px',
                  borderColor: 'black',
                  height: '16rem',
                  width: '32.7rem',
                }}
                component="span"
              >
                <PhotoCamera color="action" fontSize="large" />
              </Button>
              <div className="flex flex-row gap-3 mt-3">
                <Button
                  sx={{
                    border: 'solid 1px',
                    borderColor: 'black',
                    height: '8rem',
                    width: '16rem',
                  }}
                  component="span"
                >
                  <PhotoCamera color="action" fontSize="large" />
                </Button>
                <Button
                  sx={{
                    border: 'solid 1px',
                    borderColor: 'black',
                    height: '8rem',
                    width: '16rem',
                  }}
                  component="span"
                >
                  <PhotoCamera color="action" fontSize="large" />
                </Button>
              </div>
              <div className="flex flex-row gap-3 mt-3">
                <Button
                  sx={{
                    border: 'solid 1px',
                    borderColor: 'black',
                    height: '8rem',
                    width: '16rem',
                  }}
                  component="span"
                >
                  <PhotoCamera color="action" fontSize="large" />
                </Button>
                <Button
                  sx={{
                    border: 'solid 1px',
                    borderColor: 'black',
                    height: '8rem',
                    width: '16rem',
                  }}
                  component="span"
                >
                  <PhotoCamera color="action" fontSize="large" />
                </Button>
              </div>
            </label>
          </div>
          <button
            onClick={() => navigate('/')}
            className="absolute top-5 right-5 border w-20 font-semibold text-white p-3 rounded-md duration-300 hover:opacity-90 bg-black shadow-2xl"
          >
            Exit
          </button>
          <div className="z-10 bg-white">
            <div className="absolute bottom-24 w-[27.75%] border-t-4 border-black" />
            <div className="absolute bottom-24 w-6/12 border-t border-gray-800" />
            <button
              onClick={() => setPage(4)}
              className="absolute bottom-5 ml-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
            >
              Back
            </button>
            <button
              onClick={() => setPage(6)}
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
