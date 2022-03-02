import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState, forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Photos({ setReviews }) {
  const value = 2;

  const url1 =
    'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
  const url2 =
    'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80';
  const url3 =
    'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80';
  const url4 =
    'https://images.unsplash.com/photo-1538944495092-48fff71fbb0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
  const url5 =
    'https://images.unsplash.com/photo-1605886290933-7ed7b3240d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80';
  const url6 =
    'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [photoNum, setPhotoNum] = useState<number>(1);
  const photos = [url1, url2, url3, url4, url5, url6];

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-row justify-around items-center mb-6 gap-[42rem]">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold">Lorem ipsum dolor sit amet</h1>
          <div className="flex flex-row gap-9">
            <div className="flex flex-row gap-3 items-center">
              <Rating className="text-lg text-orange-500" name="read-only" value={value} readOnly />
              <h1 className="font-semibold">{value}</h1>
              <h5
                onClick={() => setReviews(true)}
                className="underline font-semibold cursor-pointer"
              >
                12 reviews
              </h5>
            </div>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link underline="hover" color="black" href="/">
                Home
              </Link>
              <Link underline="hover" color="black" href="/rooms">
                San Francisco
              </Link>
              <h1
                style={{
                  color: 'inherit',
                }}
              >
                Lorem ipsum
              </h1>
            </Breadcrumbs>
          </div>
        </div>
        <FavoriteBorderIcon className="text-3xl cursor-pointer hover:text-orange-500" />
      </div>
      <div onClick={handleClickOpen} className="flex flex-row gap-2 mb-10">
        <img
          onClick={() => setPhotoNum(1)}
          src={url1}
          className="rounded-l-3xl duration-500 w-[40rem] hover:opacity-90 cursor-pointer"
          alt="photos"
        />
        <div className="flex flex-col gap-2">
          <img
            onClick={() => setPhotoNum(2)}
            src={url2}
            className="w-80 h-64 duration-500 hover:opacity-90 cursor-pointer"
            alt="photos"
          />
          <img
            onClick={() => setPhotoNum(3)}
            src={url3}
            className="w-80 h-64 duration-500 hover:opacity-90 cursor-pointer"
            alt="photos"
          />
        </div>
        <div className="flex flex-col gap-2">
          <img
            onClick={() => setPhotoNum(4)}
            src={url4}
            className="rounded-tr-3xl w-80 h-64 duration-500 hover:opacity-90 cursor-pointer"
            alt="photos"
          />
          <img
            onClick={() => setPhotoNum(5)}
            src={url5}
            className="rounded-br-3xl w-80 h-64 duration-500 hover:opacity-90 cursor-pointer"
            alt="photos"
          />
        </div>
      </div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar
            style={{
              backgroundColor: 'black',
            }}
          >
            <IconButton color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '10rem',
            }}
          >
            {photoNum !== 1 ? (
              <button
                onClick={() => setPhotoNum(photoNum - 1)}
                style={{
                  alignSelf: 'center',
                }}
              >
                <ArrowBackIosIcon fontSize="large" />
              </button>
            ) : (
              <div
                style={{
                  padding: '17.5px',
                }}
              ></div>
            )}
            <img
              src={photos[photoNum - 1]}
              alt="photos"
              style={{
                width: '120vh',
                height: '80vh',
              }}
            />
            {photoNum !== photos.length ? (
              <button
                onClick={() => setPhotoNum(photoNum + 1)}
                style={{
                  alignSelf: 'center',
                }}
              >
                <ArrowForwardIosIcon fontSize="large" />
              </button>
            ) : (
              <div
                style={{
                  padding: '17.5px',
                }}
              ></div>
            )}
          </div>
          <h1
            style={{
              fontWeight: 'bolder',
            }}
          >
            {photoNum} / {photos.length}
          </h1>
        </div>
      </Dialog>
    </div>
  );
}
