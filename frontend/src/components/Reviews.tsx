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
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Reviews() {
  const value = 4;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <div className="flex flex-row items-center mt-10 gap-2">
        <Rating
          className="text-2xl text-orange-500"
          name="read-only"
          value={value}
          readOnly
        />
        <h1 className="text-xl font-extrabold">{value}</h1>
        <h5 className="text-xl font-extrabold">- 20 reviews</h5>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia repudiandae eos voluptas sunt eligendi eius facere ea
                  voluptatum dolor earum dolores unde at harum explicabo quas
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia repudiandae eos voluptas sunt eligendi eius facere ea
                  voluptatum dolor earum dolores unde at harum explicabo quas
                </h1>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleClickOpen}
          className="mt-5 border w-56 font-bold border-black text-black self-center p-3 rounded-md duration-300 hover:bg-black hover:text-white"
        >
          Show all 20 reviews
        </button>
      </div>
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle sx={{ m: 0, p: 5 }}>
            {open ? (
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>
          <div>
            <Rating name="read-only" value={value} readOnly />
            <h1>{value}</h1>
            <h5>- 20 reviews</h5>
          </div>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Box>
          <DialogContent>
            <div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                <div className="flex flex-row gap-5">
                  <Avatar>B</Avatar>
                  <div>
                    <h1>Brandon</h1>
                    <h1>February 2022</h1>
                    <h1>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia repudiandae eos voluptas sunt eligendi eius facere
                      ea voluptatum dolor earum dolores unde at harum explicabo
                      quas
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
