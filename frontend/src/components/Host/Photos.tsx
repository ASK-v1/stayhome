import { useNavigate } from 'react-router';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import axios from 'axios';
import { useState } from 'react';
import store from '../../store';
import CircularProgress from '@mui/material/CircularProgress';

const Input = styled('input')({ display: 'none' });

export default function Photos({ setPage, setPhotos }) {
  const navigate = useNavigate();
  const user = store.useAppSelector((state) => JSON.parse(state.user.user));

  const [selectedFileFirst, setSelectedFileFirst] = useState<File>();
  const [selectedFileSecond, setSelectedFileSecond] = useState<File>();
  const [selectedFileThird, setSelectedFileThird] = useState<File>();
  const [selectedFileFourth, setSelectedFileFourth] = useState<File>();
  const [selectedFileFifth, setSelectedFileFifth] = useState<File>();

  const [hostImagesFirst, setHostImagesFirst] = useState<boolean>(false);
  const [hostImagesSecond, setHostImagesSecond] = useState<boolean>(false);
  const [hostImagesThird, setHostImagesThird] = useState<boolean>(false);
  const [hostImagesFourth, setHostImagesFourth] = useState<boolean>(false);
  const [hostImagesFifth, setHostImagesFifth] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const uploadImage = async () => {
    setLoading(true);

    const fd1 = new FormData();
    fd1.append('file', selectedFileFirst);
    fd1.append('upload_preset', 'm8d2vbyn');
    const fd2 = new FormData();
    fd2.append('file', selectedFileSecond);
    fd2.append('upload_preset', 'm8d2vbyn');
    const fd3 = new FormData();
    fd3.append('file', selectedFileThird);
    fd3.append('upload_preset', 'm8d2vbyn');
    const fd4 = new FormData();
    fd4.append('file', selectedFileFourth);
    fd4.append('upload_preset', 'm8d2vbyn');
    const fd5 = new FormData();
    fd5.append('file', selectedFileFifth);
    fd5.append('upload_preset', 'm8d2vbyn');

    if (
      hostImagesFirst &&
      hostImagesSecond &&
      hostImagesThird &&
      hostImagesFourth &&
      hostImagesFifth
    ) {
      const res1 = await axios.post('https://api.cloudinary.com/v1_1/dpsbq1odp/image/upload', fd1);
      const res2 = await axios.post('https://api.cloudinary.com/v1_1/dpsbq1odp/image/upload', fd2);
      const res3 = await axios.post('https://api.cloudinary.com/v1_1/dpsbq1odp/image/upload', fd3);
      const res4 = await axios.post('https://api.cloudinary.com/v1_1/dpsbq1odp/image/upload', fd4);
      const res5 = await axios.post('https://api.cloudinary.com/v1_1/dpsbq1odp/image/upload', fd5);

      const obj = {
        id: user._id,
        first: res1.data.secure_url,
        second: res2.data.secure_url,
        third: res3.data.secure_url,
        fourth: res4.data.secure_url,
        fifth: res5.data.secure_url,
      };
      setPhotos(obj.first);
      setPage(6);
      setLoading(false);
    }
    return setLoading(false);
  };

  const selectedImage = (event: any, image: string, setHostImages: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      const output: any = document.getElementById(`output-${image}`);
      output.src = dataURL;
    };
    reader.readAsDataURL(event.target.files[0]);
    setHostImages(true);
  };

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex items-center h-screen p-20 w-7/12 self-center text-5xl font-black bg-orange-500 text-white">
          <h1>Add some photos of your place</h1>
        </div>
        <div className="flex flex-col bg-white w-7/12 justify-start mt-20">
          <div className="flex gap-3 flex-col self-center">
            <label>
              <Input
                onChange={(event) => {
                  setSelectedFileFirst(event.target.files[0]);
                  selectedImage(event, '1', setHostImagesFirst);
                }}
                type="file"
                accept="image/png, image/jpeg, image/jpg"
              />
              {hostImagesFirst ? (
                <img className="rounded-md w-[32.7rem] h-[16rem]" id="output-1" alt="img" />
              ) : (
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
              )}
            </label>
            <div className="flex flex-row gap-3">
              <label>
                <Input
                  onChange={(event) => {
                    setSelectedFileSecond(event.target.files[0]);
                    selectedImage(event, '2', setHostImagesSecond);
                  }}
                  type="file"
                  accept=".jpg, .png, .jpeg"
                />
                {hostImagesSecond ? (
                  <img className="rounded-md w-64 h-36" id="output-2" alt="img" />
                ) : (
                  <Button
                    sx={{
                      border: 'solid 1px',
                      borderColor: 'black',
                      height: '9rem',
                      width: '16rem',
                    }}
                    component="span"
                  >
                    <PhotoCamera color="action" fontSize="large" />
                  </Button>
                )}
              </label>
              <label>
                <Input
                  onChange={(event) => {
                    setSelectedFileThird(event.target.files[0]);
                    selectedImage(event, '3', setHostImagesThird);
                  }}
                  type="file"
                  accept=".jpg, .png, .jpeg"
                />
                {hostImagesThird ? (
                  <img className="rounded-md w-64 h-36" id="output-3" alt="img" />
                ) : (
                  <Button
                    sx={{
                      border: 'solid 1px',
                      borderColor: 'black',
                      height: '9rem',
                      width: '16rem',
                    }}
                    component="span"
                  >
                    <PhotoCamera color="action" fontSize="large" />
                  </Button>
                )}
              </label>
            </div>
            <div className="flex flex-row gap-3">
              <label>
                <Input
                  onChange={(event) => {
                    setSelectedFileFourth(event.target.files[0]);
                    selectedImage(event, '4', setHostImagesFourth);
                  }}
                  type="file"
                  accept=".jpg, .png, .jpeg"
                />
                {hostImagesFourth ? (
                  <img className="rounded-md w-64 h-36" id="output-4" alt="img" />
                ) : (
                  <Button
                    sx={{
                      border: 'solid 1px',
                      borderColor: 'black',
                      height: '9rem',
                      width: '16rem',
                    }}
                    component="span"
                  >
                    <PhotoCamera color="action" fontSize="large" />
                  </Button>
                )}
              </label>
              <label>
                <Input
                  onChange={(event) => {
                    setSelectedFileFifth(event.target.files[0]);
                    selectedImage(event, '5', setHostImagesFifth);
                  }}
                  type="file"
                  accept=".jpg, .png, .jpeg"
                />
                {hostImagesFifth ? (
                  <img className="rounded-md w-64 h-36" id="output-5" alt="img" />
                ) : (
                  <Button
                    sx={{
                      border: 'solid 1px',
                      borderColor: 'black',
                      height: '9rem',
                      width: '16rem',
                    }}
                    component="span"
                  >
                    <PhotoCamera color="action" fontSize="large" />
                  </Button>
                )}
              </label>
            </div>
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
              onClick={uploadImage}
              className="absolute bottom-5 right-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {loading && (
        <div className="flex justify-center">
          <CircularProgress
            size={50}
            style={{
              position: 'fixed',
              top: '42%',
              right: '24%',
              color: 'orange',
            }}
          />
        </div>
      )}
    </div>
  );
}
