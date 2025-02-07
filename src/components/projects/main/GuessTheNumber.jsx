import { useState } from "react";
import ChallengeHeader from "../../util/ChallengeHeader";

const Guess = () => {
  const [guess, setGuess] = useState(0);
  const [guessing, setGuessing] = useState(false);

  const handleGuess = () => {
    console.log("Correct guess would have een:", correctGuess);
    setGuessing(true);
  };
  const [correctGuess, setCorrectGuess] = useState(
    Math.floor(Math.random() * 100)
  );
  const handleReset = () => {
    setCorrectGuess(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <ChallengeHeader title="Guess The Number" />
      <div className="min-w-36 flex flex-col items-center justify-center">
        <p>Guess a Number between 0 and 100</p>
        <input
          type="number"
          maxLength={16}
          className="w-50 border"
          onChange={(e) => setGuess(e.target.value)}
        />
        <div className="flex justify-around">
          <button
            onClick={handleGuess}
            className="border m-2 px-2 py-1 border-gray-600 rounded-lg"
          >
            Guess
          </button>
          <button
            onClick={handleReset}
            className="border m-2 px-2 py-1 border-gray-600 rounded-lg"
          >
            Reset
          </button>
        </div>
        {guessing && guess === correctGuess && <p>Correct Guess!</p>}
        {guessing && guess < correctGuess && <p>Your guess is too low.</p>}
        {guessing && guess > correctGuess && <p>Your guess is too high.</p>}
      </div>
    </div>
  );
};

export default Guess;
