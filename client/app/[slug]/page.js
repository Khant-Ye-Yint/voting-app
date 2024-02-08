import CandidateCardList from '../../components/candidates/candidateCardList';

const Poll = ({ params }) => {
  return (
    <div className="w-full">
      <h1 className="text-2xl ">Candidates</h1>
      <CandidateCardList />
    </div>
  );
};

export default Poll;
