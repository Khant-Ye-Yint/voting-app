import Link from 'next/link';

const PollCard = () => {
  return (
    <div className=" w-72 h-40 bg-gray-200 rounded-md py-4 px-5 flex flex-col justify-between items-center text-start ">
      <h1 className="w-full text-xl">Best Singers in Myanmar</h1>
      <div className="flex flex-row justify-end items-center w-full gap-1">
        <p>candidates - 5</p>
        <p>total votes - 200</p>
      </div>

      <div className="flex flex-row gap-2">
        <Link href="/dashboard/bestSingersInMyanmar">
          <div className=" bg-green-300 hover:bg-green-400 py-1 px-2 rounded-md text-md cursor-pointer">
            View
          </div>
        </Link>
        <Link href="/dashboard/polls/asdfadf/edit">
          <div className=" bg-yellow-300 hover:bg-yellow-400 py-1 px-2 rounded-md text-md cursor-pointer">
            Edit
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PollCard;
