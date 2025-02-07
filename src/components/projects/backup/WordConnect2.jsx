import { useState } from "react";
import ChallengeHeader from "../../util/ChallengeHeader";

const wordPairs = [
  ["Kuala Lumpur", "Malaysia"],
  ["New Delhi", "India"],
  ["Tokyo", "Japan"],
  ["MalÃ©", "Maldives"],
  ["Mali", "Bamako"],
  ["Kuwait", "Kuwait City"],
  ["Kiribati", "South Tarawa"],
  ["Iraq", "Baghdad"],
];

const connectedThreeWords = [
  ["Basil", "Thyme", "Rosemary"],
  ["Latte", "Cappuccino", "Espresso"],
  ["Octopus", "Dolphin", "Seahorse"],
  ["Beach", "Mountain", "Forest"],
  ["Paintbrush", "Canvas", "Palette"],
  ["Rock", "Pop", "Jazz"],
  ["Running", "Yoga", "Dancing"],
  ["Volcano", "Canyon", "Ocean"],
  ["Phone", "Email", "Letter"],
  ["Flood", "Earthquake", "Hurricane"],
  ["Sight", "Smell", "Taste"],
  ["Past", "Present", "Future"],
  ["Literature", "History", "Biology"],
  ["Spring", "Summer", "Autumn"],
  ["Basketball", "Jersey", "Whistle"],
  ["Textbook", "Notebook", "Pencil"],
  ["Spoon", "Fork", "Knife"],
  ["Shirt", "Pants", "Shoes"],
  ["Lion", "Elephant", "Giraffe"],
  ["Sunflower", "Rose", "Daisy"],
  ["Cucumber", "Tomato", "Carrot"],
  ["Tea", "Coffee", "Juice"],
  ["Milk", "Yogurt", "Cheese"],
  ["Pikachu", "Charmander", "Squirtle"],
  ["Batman", "Superman", "Spiderman"],
  ["Elsa", "Anna", "Olaf"],
];

const Practice = () => {
  const handleShuffle = () => wordPairs.flat().sort(() => Math.random() - 0.5);

  const [words, setWord] = useState(handleShuffle());
  const [selectedWords, setSelectedWords] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [wrongPair, setWrongPair] = useState(false);
  
  const handleReset = () => {
    setWord(handleShuffle());
    setSelectedWords([]);
    setMatchedPairs([]);
    setWrongPair(false);
  };

  const handleKey = async (word) => {
    if (selectedWords.includes(word)) return;

    let nSelectedWords = [...selectedWords, word];
    setSelectedWords(nSelectedWords);
    if (nSelectedWords.length === 2) {
      let isMatched = wordPairs.some(
        ([w1, w2]) =>
          (w1 === nSelectedWords[0] && w2 === nSelectedWords[1]) ||
          (w2 === nSelectedWords[0] && w1 === nSelectedWords[1])
      );
      if (isMatched) {
        setMatchedPairs([...matchedPairs, ...nSelectedWords]);
        setTimeout(() => {
          let nWord = words.filter((w) => !nSelectedWords.includes(w));
          setWord(nWord);
        }, 1000);
      } else {
        setWrongPair(true);
      }
      // setSelectedWords([]);
      setTimeout(() => {
        setSelectedWords([]);
        setWrongPair(false);
      }, 500);
    }
  };

  return (
    <div>
      <ChallengeHeader title="Word Connect" />
      <div>
        <h1>Word Connnect</h1>
        <div className="flex gap-5 flex-wrap">
          {words?.map((word, index) => (
            <button
              key={index}
              onClick={() => handleKey(word)}
              className={`${
                selectedWords.includes(word)
                  ? wrongPair
                    ? "bg-red-400"
                    : "bg-blue-300"
                  : matchedPairs.flat().includes(word)
                  ? "bg-green-400"
                  : "bg-white"
              } border-[1px] border-solid border-black `}
            >
              {word}
            </button>
          ))}
        </div>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    </div>
  );
};

export default Practice;
