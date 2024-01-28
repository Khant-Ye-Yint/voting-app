import PollCardList from '@/components/Polls/PollCardList';

const Home = () => {
  return (
    <div>
      <h1 className=" text-2xl ">Current Polls</h1>
      <PollCardList />
    </div>
  );
};

export default Home;
