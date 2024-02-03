import Image from 'next/image';
import NiniImage from '../../public/nini.jpg';
import { GoHeart, GoHeartFill } from 'react-icons/go';

const CandidateCard = () => {
  return (
    <div className=" w-[380px] h-[180px] bg-gray-200 flex flex-row rounded-md overflow-hidden shadow-md">
      <div className="relative flex-1 h-full">
        <Image src={NiniImage} alt="nini image" layout="fill" />
      </div>
      <div className="flex flex-col items-center justify-between flex-1 p-5">
        <div className="flex flex-col items-start justify-center w-full text-lg">
          <h1>Name - Nini</h1>
          <p>Age - 40</p>
          <p>Hobby - Singing</p>
        </div>
        <div className="flex items-center justify-end w-full">
          {/* <GoHeart className="text-green-500 cursor-pointer" size={20} /> */}
          <GoHeartFill className="text-green-500 cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
