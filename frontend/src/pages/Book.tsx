import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';
import { OutlinedInput } from '@mui/material';
import TextField from '@mui/material/TextField';
import { orange } from '@material-ui/core/colors';
import Avatar from '@mui/material/Avatar';

export default function Book() {
  const navigate = useNavigate();

  const url =
    'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-center p-20 gap-20">
        <div className="flex flex-col">
          <div className="flex flex-row gap-5 items-start">
            <IconButton onClick={() => navigate('/room')}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <h1 className="text-4xl font-black mb-10">Request to book</h1>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h1 className="font-bold text-xl my-5">Pay with</h1>
            <img className="h-5" src="img/pay.png" alt="logo" />
          </div>
          <OutlinedInput
            style={{
              width: '30rem',
            }}
            type="number"
            placeholder="Card Number"
          />
          <div className="flex flex-row">
            <OutlinedInput
              style={{
                width: '15rem',
              }}
              type="number"
              placeholder="Expiration"
            />
            <OutlinedInput
              style={{
                width: '15rem',
              }}
              type="number"
              placeholder="CVC"
            />
          </div>
          <OutlinedInput
            style={{
              width: '30rem',
              marginTop: '20px',
            }}
            type="number"
            placeholder="ZIP code"
          />

          <div className="border-gray-400 border-b my-5 w-[30rem] self-center" />

          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-xl">Required for your trip</h1>
            <div className="flex flex-col gap-1">
              <h1>Message the Host</h1>
              <h1 className="text-gray-800 text-sm">
                Let the Host know why you're traveling and when you'll check in.
              </h1>
              <div className="flex flex-row gap-5 mt-5">
                <Avatar
                  style={{
                    backgroundColor: orange[600],
                  }}
                >
                  B
                </Avatar>
                <div className="flex flex-col">
                  <h1 className="font-bold">Brandon</h1>
                  <h1>February 2022</h1>
                </div>
              </div>
            </div>
            <TextField multiline rows={6} fullWidth sx={{ width: '30rem' }} />
          </div>
          <button className="font-semibold border-black bg-black hover:opacity-90 text-white  w-[200px] h-12 mt-10 self-start rounded duration-300">
            Request to book
          </button>
        </div>

        <div className="flex flex-col shadow-2xl rounded-3xl border border-gray-400 h-[42rem]">
          <div className="flex flex-col gap-5">
            <img src={url} className="rounded-t-3xl w-[25rem]" alt="photos" />
            <div className="flex flex-col gap-3 items-start ml-5">
              <h1 className="font-bold">Lorem ipsum dolor sit amet</h1>
              <div className="flex flex-row gap-3">
                <StarIcon className="text-orange-500" />
                <h1 className="font-semibold">4.2</h1>
                <h1 className="text-gray-800">(20 reviews)</h1>
              </div>
            </div>
          </div>
          <div className="mt-5 p-7">
            <h1 className="text-xl font-bold">Price details</h1>
            <div className="flex flex-col gap-3 mt-5">
              <div className="flex flex-row justify-between">
                <h1 className="underline text-gray-800">$151 x 3 nights</h1>
                <h1 className="font-semibold">$452</h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="underline text-gray-800">Cleaning fee</h1>
                <h1 className="font-semibold">$99</h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="underline text-gray-800">Service fee</h1>
                <h1 className="font-semibold">$99</h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="underline text-gray-800">Taxes</h1>
                <h1 className="font-semibold">$33</h1>
              </div>
            </div>
            <div className="border-b border-gray-400 mt-5" />
            <div className="flex flex-row justify-between mt-5">
              <h1 className="font-bold text-lg">Total(USD)</h1>
              <h1 className="font-bold text-lg">$687</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
