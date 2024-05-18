import { BsFillStopwatchFill } from 'react-icons/bs';
import { FaPhoneVolume, FaLocationPin } from 'react-icons/fa6';

const Contacts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-black text-white rounded-xl p-10 gap-5">
      <div className="flex gap-4">
        <div className="items-center flex text-red-500 text-3xl bg-white rounded-full p-2">
          <BsFillStopwatchFill />
        </div>
        <div>
          <p>We are open monday-friday</p>
          <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="items-center flex text-red-500 text-3xl bg-white rounded-full p-2">
          <FaPhoneVolume />
        </div>
        <div>
          <p>Have a question?</p>
          <p className="text-2xl font-bold">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="items-center flex text-red-500 text-3xl bg-white rounded-full p-2">
          <FaLocationPin />
        </div>
        <div>
          <p>Need a repair? our address</p>
          <p className="text-2xl font-bold">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
