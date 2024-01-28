import Link from 'next/link';

const PollCard = () => {
  return (
    <Link href="/bestSingersInMyanmar">
      <div className=" w-72 h-32 bg-gray-200 rounded-md py-4 px-5 flex flex-col justify-between items-center text-start hover:cursor-pointer">
        <h1 className="w-full text-xl">Best Singers in Myanmar</h1>
        <div className="flex flex-row justify-end items-center w-full gap-1">
          <p>candidates - 5</p>
          <p>total votes - 200</p>
        </div>
      </div>
    </Link>
  );
};

export default PollCard;
