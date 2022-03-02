import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarIcon from '@mui/icons-material/Star';

export default function Book() {
  const url =
    'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-center p-32 gap-96">
        <div>
          <h1 className="text-4xl font-bold">Request to book</h1>
        </div>
        <div className="flex flex-col p-10 shadow-2xl rounded-3xl">
          <div className="flex flex-row gap-5">
            <img src={url} className="rounded-3xl w-[15rem]" alt="photos" />
            <div className="flex flex-col justify-between">
              <h1 className="font-bold">Lorem ipsum dolor sit amet</h1>
              <div className="flex flex-row gap-3">
                <StarIcon className="text-orange-500" />
                <h1 className="font-bold">4.2</h1>
                <h1 className="text-gray-800">(20 reviews)</h1>
              </div>
            </div>
          </div>
          <div className="border border-gray-400 mt-10" />
          <div className="mt-5">
            <h1 className="text-xl">Price details</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
