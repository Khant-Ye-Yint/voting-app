import PollCardList from './polls/PollCardList';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Current Polls</h1>
        <div className="flex flex-row gap-2">
          <Link href="/dashboard/createPoll">
            <div className=" bg-green-300 hover:bg-green-400 py-1 px-2 rounded-md text-lg cursor-pointer">
              Create Poll +
            </div>
          </Link>
        </div>
      </div>
      <PollCardList />
    </div>
  );
};

export default Home;
