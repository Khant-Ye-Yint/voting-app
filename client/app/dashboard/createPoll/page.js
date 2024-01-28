import Link from 'next/link';

const CreatePoll = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Create New Poll</h1>
      </div>

      <form className="my-5 flex flex-col justify-center items-center gap-5">
        <div className="flex flex-row gap-2">
          <h1 className="text-lg">Title</h1>
          <input type="text" className=" ring-1 ring-green-300 bg-gray-200" />
        </div>
        <div className="flex flex-row gap-2">
          <Link href="/dashboard">
            <div className=" bg-gray-300 hover:bg-gray-400 py-1 px-2 rounded-md text-md cursor-pointer">
              Cancel
            </div>
          </Link>
          <div className=" bg-green-300 hover:bg-green-400 py-1 px-2 rounded-md text-md cursor-pointer">
            Create
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePoll;
