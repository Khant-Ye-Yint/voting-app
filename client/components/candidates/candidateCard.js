import Image from 'next/image';
import NiniImage from '../../public/nini.jpg';
import { GoHeart, GoHeartFill } from 'react-icons/go';

const CandidateCard = () => {
  return (
    <div className=" w-[400px] h-[200px] bg-gray-200 flex flex-row rounded-md overflow-hidden shadow-md">
      <div className="relative h-full flex-1">
        <Image src={NiniImage} alt="nini image" layout="fill" />
      </div>
      <div className="flex flex-col justify-between items-center flex-1 p-5">
        <div className="flex flex-col justify-center items-start text-lg w-full">
          <h1>Name - Nini</h1>
          <p>Age - 40</p>
          <p>Hobby - Singing</p>
        </div>
        <div className="w-full flex justify-end items-center">
          {/* <GoHeart className="cursor-pointer text-green-500" size={20} /> */}
          <GoHeartFill className="cursor-pointer text-green-500" size={20} />
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
