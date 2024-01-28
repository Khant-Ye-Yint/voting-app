import Link from 'next/link';

const CandidateEdit = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="flex justify-between items-center self-start">
        <h1 className="text-2xl">Editing Best Singers In Myanmar</h1>
      </div>
      <form className="my-5 flex flex-col justify-center items-center gap-5 w-72">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-lg">Name</h1>
          <input type="text" className=" ring-1 ring-green-300 bg-gray-200" />
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-lg">Age</h1>
          <input type="text" className=" ring-1 ring-green-300 bg-gray-200" />
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-lg">Hobby</h1>
          <input type="text" className=" ring-1 ring-green-300 bg-gray-200" />
        </div>
        <div className="flex flex-row gap-5 justify-between items-center w-full">
          <h1 className="text-lg">Image</h1>
          <input type="file" />
        </div>
        <div className="flex flex-row gap-2">
          <Link href="/dashboard/bestSingerInMyanmar">
            <div className=" bg-gray-300 hover:bg-gray-400 py-1 px-2 rounded-md text-md cursor-pointer">
              Cancel
            </div>
          </Link>
          <div className=" bg-green-300 hover:bg-green-400 py-1 px-2 rounded-md text-md cursor-pointer">
            Update
          </div>
          <div className=" bg-red-300 hover:bg-red-400 py-1 px-2 rounded-md text-md cursor-pointer">
            Delete
          </div>
        </div>
      </form>
    </div>
  );
};

export default CandidateEdit;
