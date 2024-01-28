import PollCard from './PollCard';

const PollCardList = () => {
  const dummyArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="flex flex-row flex-wrap justify-between items-center gap-5 mt-5">
      {dummyArr.map((chunk, key) => {
        return <PollCard key={key} />;
      })}
    </div>
  );
};

export default PollCardList;
