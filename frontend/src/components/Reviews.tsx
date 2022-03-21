import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { orange, grey } from '@material-ui/core/colors';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Reviews({ reviews, setReviews }) {
  const [filter, setFilter] = useState<string>('');

  const reviewsArr = [
    'Lorem ipsum dolor sit amet',
    'sit amet consectetur adipisicing',
    ' Officia repudiandae eos voluptas sunt',
    'harum explicabo quas',
    'eligendi eius facere ea',
    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ratione omnis magni harum quas iste, tenetur mollitia eos nostrum autem fuga est totam unde veniam consequatur odio, doloribus eaque. Itaque?',
  ];

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const value = 4;

  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setReviews(false);
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <div className="flex flex-row items-center mt-10 gap-2">
        <Rating className="text-2xl text-orange-500" name="read-only" value={value} readOnly />
        <h1 className="text-xl font-bold">{value}</h1>
        <h5 className="text-xl font-bold">- 20 reviews</h5>
      </div>
      <div className="flex flex-col gap-20 mt-10">
        <div className="flex flex-row gap-28">
          {[1, 2].map(() => (
            <div className="flex flex-row gap-5">
              <Avatar className="p-6 bg-orange-500">B</Avatar>
              <div className="flex flex-col">
                <h1 className="font-bold">Brandon</h1>
                <h1 className="text-gray-800">February 2022</h1>
                <h1 className="w-[500px] mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repudiandae eos
                  voluptas sunt eligendi eius facere ea voluptatum dolor earum dolores unde at harum
                  explicabo quas
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-28">
          {[1, 2].map(() => (
            <div className="flex flex-row gap-5">
              <Avatar className="p-6 bg-orange-500">B</Avatar>
              <div className="flex flex-col">
                <h1 className="font-bold">Brandon</h1>
                <h1 className="text-gray-800">February 2022</h1>
                <h1 className="w-[500px] mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repudiandae eos
                  voluptas sunt eligendi eius facere ea voluptatum dolor earum dolores unde at harum
                  explicabo quas
                </h1>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleClickOpen}
          className="mt-5 border w-56 font-semibold border-black text-black self-center p-3 rounded-md duration-300 hover:bg-black hover:text-white"
        >
          Show all 20 reviews
        </button>
      </div>
      <div>
        <Dialog
          open={open || reviews}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          maxWidth={'md'}
        >
          <DialogTitle sx={{ m: 0, p: 3 }}>
            {open ? (
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  left: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              fontWeight: 'bold',
              fontSize: '25px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Rating
              style={{
                color: orange[600],
                fontSize: '25px',
              }}
              name="read-only"
              value={value}
              readOnly
            />
            <h1>{value}</h1>
            <h5>- 20 reviews</h5>
          </div>
          <FormControl sx={{ m: 5 }}>
            <OutlinedInput
              onChange={handleChange}
              style={{
                borderRadius: '50px',
              }}
              startAdornment={
                <InputAdornment position="end">
                  <SearchIcon
                    fontSize="large"
                    style={{
                      marginRight: '10px',
                    }}
                  />
                </InputAdornment>
              }
            />
          </FormControl>
          <DialogContent>
            <div
              style={{
                marginLeft: '25px',
                display: 'flex',
                flexDirection: 'column',
                gap: '50px',
              }}
            >
              {reviewsArr
                .filter((reviewArr) => reviewArr.toLowerCase().includes(filter.toLowerCase()))
                .map((review) => (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '15px',
                    }}
                  >
                    <Avatar
                      style={{
                        backgroundColor: orange[600],
                      }}
                    >
                      B
                    </Avatar>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <h1
                        style={{
                          fontWeight: 'bold',
                        }}
                      >
                        Brandon
                      </h1>
                      <h1 style={{ color: grey[800], marginBottom: '5px' }}>February 2022</h1>
                      <h1>{review}</h1>
                    </div>
                  </div>
                ))}
            </div>
            <div
              style={{
                width: '1000px',
              }}
            ></div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
