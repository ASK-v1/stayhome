import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footers() {
  return (
    <footer className="p-10 gap-5 flex flex-col justify-center items-center text-white bg-black">
      <div className="bg-logo h-16 w-52 bg-center bg-cover" />
      <p className="mt-3">Copyright © 2022 - All right reserved</p>
      <div>
        <div className="grid grid-flow-col gap-8">
          <FacebookIcon fontSize="large" />
          <YouTubeIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
        </div>
      </div>
    </footer>
  );
}
