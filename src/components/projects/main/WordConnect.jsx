import { useState } from "react";
import ChallengeHeader from "../../util/ChallengeHeader";

function WordConnect() {
  const wordPairs = [
    ["Kuala Lumpur", "Malaysia"],
    ["New Delhi", "India"],
    ["Tokyo", "Japan"],
    ["Malay", "Maldives"],
    ["Mali", "Bamako"],
    ["Kuwait", "Kuwait City"],
    ["Kiribati", "South Tarawa"],
    ["Iraq", "Baghdad"],
  ];

  const [attempts, setAttempts] = useState(0);
  const [selected, setSelected] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  const handleClick = (word) => {
    if (selected.includes(word)) return;

    const newSelected = [...selected, word];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      const matched = wordPairs.some(([w1, w2]) => {
        return (
          (w1 === newSelected[0] && w2 === newSelected[1]) ||
          (w2 === newSelected[0] && w1 === newSelected[1])
        );
      });
      if (matched) {
        const newMatchedPairs = [...matchedPairs, ...newSelected];
        setMatchedPairs(newMatchedPairs);
        console.log("new matched pairs", newMatchedPairs);
      }
      setSelected([]);
    }

    setAttempts(attempts + 1);
  };

  const reset = () => {
    setAttempts(0);
    setSelected([]);
    setMatchedPairs([]);
  };

  return (
    <div>
      <ChallengeHeader title="Word Connect" />
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        {/* Cards container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-amber-200">
          {matchedPairs.length !== wordPairs.flat().length ? (
            wordPairs.flat().map((word, index) => {
              if (matchedPairs.includes(word)) return;
              return (
                <button
                  className="hover:cursor-pointer bg-white hover:bg-gray-100 transition-colors border hover:scale-110 h-20 px-4"
                  key={index}
                  onClick={() => handleClick(word)}
                >
                  {word}
                </button>
              );
            })
          ) : (
            <p>Please hit reset to play again.</p>
          )}
        </div>
        <div className="flex justify-between gap-10">
          {/* Attempts counter */}
          <div className="flex flex-wrap justify-center items-center gap-4 p-4 bg-blue-950 text-white shadow-lg rounded-2xl">
            <p>Attempts</p>
            <p>{Number.parseInt(attempts / 2)}</p>
          </div>
          {/* Reset button */}
          <button
            onClick={reset}
            className="p-4 bg-white hover:bg-blue-950 text-blue-950 hover:text-white hover:scale-125 transition-colors hover:cursor-pointer shadow-lg rounded-2xl"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default WordConnect;
