import Image from 'next/image';
import NiniImage from '../../../../public/nini.jpg';
import Link from 'next/link';

const CandidateCard = () => {
  return (
    <div className=" w-[400px] h-[200px] bg-gray-100 flex flex-row rounded-md overflow-hidden shadow-md">
      <div className="relative h-full flex-1">
        <Image src={NiniImage} alt="nini image" layout="fill" />
      </div>
      <div className="flex flex-col justify-between items-center flex-1 p-5">
        <div className="flex flex-col justify-center items-start text-lg w-full">
          <h1>Name - Nini</h1>
          <p>Age - 40</p>
          <p>Hobby - Singing</p>
        </div>
        <div className="w-full flex justify-end items-center gap-2">
          <Link href="/dashboard/bestSingersInMyanmar/123414/edit">
            <div className="bg-yellow-300 hover:bg-yellow-400 py-1 px-2 rounded-md text-md cursor-pointer">
              Edit
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
