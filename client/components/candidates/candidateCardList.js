import CandidateCard from './candidateCard';

const CandidateCardList = () => {
  const dummyArr = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="my-5 flex flex-row flex-wrap justify-between items-center gap-10">
      {dummyArr.map((chunk, key) => {
        return <CandidateCard key={key} />;
      })}
    </div>
  );
};

export default CandidateCardList;
