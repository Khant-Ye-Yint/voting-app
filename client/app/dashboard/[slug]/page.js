import CandidateCardList from './candidates/candidateCardList';

const Poll = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Best Singer In Myanmar</h1>
        <div className="flex flex-row gap-2">
          <div className="bg-green-300 hover:bg-green-400 py-1 px-2 rounded-md text-lg cursor-pointer">
            View Chart
          </div>
          <div className="bg-green-300 hover:bg-green-400 py-1 px-2 rounded-md text-lg cursor-pointer">
            Add Candidate +
          </div>
        </div>
      </div>
      <CandidateCardList />
    </div>
  );
};

export default Poll;
