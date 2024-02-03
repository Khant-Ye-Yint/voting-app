import CandidateCard from './candidateCard';

const CandidateCardList = () => {
  const dummyArr = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-10 my-5">
      {dummyArr.map((chunk, key) => {
        return <CandidateCard key={key} />;
      })}
    </div>
  );
};

export default CandidateCardList;
