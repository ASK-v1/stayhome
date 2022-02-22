import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Contact() {
  return (
    <div className="flex flex-col items-center mb-20">
      <div className="border-t-gray-400 border mt-10 mb-10 w-[77rem] self-center" />
      <div className="flex flex-row gap-5">
        <Avatar className="p-10 bg-orange-500">B</Avatar>
        <div className="flex flex-col">
          <h1 className="font-bold">Brandon</h1>
          <h1 className="text-gray-800">February 2022</h1>
          <div className="flex flex-row gap-10 mt-3 items-center">
            <div className="flex flex-row gap-3 items-center">
              <StarIcon className=" text-orange-500" />
              <h1>20 reviews</h1>
            </div>
            <div className="flex flec-row gap-3 items-center">
              <CheckCircleIcon className=" text-orange-500" />
              <h1>Identity verified</h1>
            </div>
          </div>
          <h1 className="w-[30rem] mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum id
            ipsam voluptas quaerat eaque eveniet totam! Nobis exercitationem rem
            id nulla esse soluta qui. Ab libero quaerat nesciunt neque ipsa?
          </h1>
        </div>
        <button className="ml-20 border w-36 font-bold border-black text-black self-center p-3 rounded-md duration-300 hover:bg-black hover:text-white">
          Contact Host
        </button>
      </div>
    </div>
  );
}
