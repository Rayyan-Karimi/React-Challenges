import ChallengeHeader from "../util/ChallengeHeader";

const Fallback = () => {
  return (
    <div>
      <ChallengeHeader title="Error 404" />
      <p className="mb-15 text-center text-red-800">
        Sorry to let you know that this page is under construction.
      </p>
    </div>
  );
};

export default Fallback;
