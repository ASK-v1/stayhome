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

export default function Photos({ setReviews, photos }) {
  const value = 2;

  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [photoNum, setPhotoNum] = useState<number>(1);

  return (
    <div>
      {photos && (
        <div className="flex flex-col items-center mt-10">
          <div className="flex flex-row justify-around items-center mb-6 gap-[42rem]">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-9">
                <div className="flex flex-row gap-3 items-center">
                  <Rating
                    className="text-lg text-orange-500"
                    name="read-only"
                    value={value}
                    readOnly
                  />
                  <h1 className="font-semibold">{value}</h1>
                  <h5
                    onClick={() => setReviews(true)}
                    className="underline font-semibold cursor-pointer"
                  >
                    12 reviews
                  </h5>
                </div>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
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
              src={photos[0]}
              className="rounded-l-3xl duration-500 w-[40rem] h-[32rem] hover:opacity-90 cursor-pointer"
              alt="photos"
            />
            <div className="flex flex-col gap-2">
              <img
                onClick={() => setPhotoNum(2)}
                src={photos[1]}
                className="w-80 h-64 duration-500 hover:opacity-90 cursor-pointer"
                alt="photos"
              />
              <img
                onClick={() => setPhotoNum(3)}
                src={photos[2]}
                className="w-80 h-64 duration-500 hover:opacity-90 cursor-pointer"
                alt="photos"
              />
            </div>
            <div className="flex flex-col gap-2">
              <img
                onClick={() => setPhotoNum(4)}
                src={photos[3]}
                className="rounded-tr-3xl w-80 h-64 duration-500 hover:opacity-90 cursor-pointer"
                alt="photos"
              />
              <img
                onClick={() => setPhotoNum(5)}
                src={photos[4]}
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
      )}
    </div>
  );
}
