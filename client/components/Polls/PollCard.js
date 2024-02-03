import Link from 'next/link';

const PollCard = () => {
  return (
    <Link href="/bestSingersInMyanmar">
      <div className="flex flex-col items-center justify-between px-5 py-4 bg-gray-200 rounded-md  w-72 h-28 text-start hover:cursor-pointer">
        <h1 className="w-full text-xl">Best Singers in Myanmar</h1>
        <div className="flex flex-row items-center justify-end w-full gap-1">
          <p>candidates - 5</p>
          <p>total votes - 200</p>
        </div>
      </div>
    </Link>
  );
};

export default PollCard;
