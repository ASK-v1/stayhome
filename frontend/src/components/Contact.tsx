import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import { useNavigate } from 'react-router';

export default function Contact({ about }) {
  const [send, setSend] = useState<boolean>(true);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mb-20">
      <div className="border-gray-400 border-b mt-10 mb-10 w-[77rem] self-center" />
      <div className="flex flex-row gap-5 items-start">
        <div onClick={() => navigate('/profile')}>
          <Avatar className="p-10 bg-orange-500 cursor-pointer text-3xl">B</Avatar>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">Hosted by Brandon</h1>
          <h1 className="text-gray-800">February 2022</h1>
          <div className="flex flex-row gap-10 mt-3 items-center">
            <div className="flex flex-row gap-3 items-center">
              <StarIcon className="text-orange-500" />
              <h1>20 reviews</h1>
            </div>
            <div className="flex flec-row gap-3 items-center">
              <CheckCircleIcon className=" text-orange-500" />
              <h1>Identity verified</h1>
            </div>
          </div>
          <h1 className="w-[30rem] mt-5">{about}</h1>
        </div>
        {send ? (
          <div className="flex flex-row gap-10 ml-20">
            <TextField
              label="Message the Host"
              multiline
              rows={6}
              fullWidth
              sx={{ width: '360px' }}
            />
            <button
              onClick={() => setSend(false)}
              className="border w-36 font-semibold border-black text-black self-center p-3 rounded-md duration-300 hover:bg-black hover:text-white"
            >
              Send message
            </button>
          </div>
        ) : (
          <Stack sx={{ width: '525px', margin: '50px' }}>
            <Alert severity="success">
              <AlertTitle>Thank you!</AlertTitle>
              Your message has been sent
            </Alert>
          </Stack>
        )}
      </div>
    </div>
  );
}
