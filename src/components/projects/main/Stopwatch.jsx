import { useState, useEffect } from "react";
import ChallengeHeader from "../../util/ChallengeHeader";
const Stopwatch = () => {
  const [isActive, setActive] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(timer + 1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [timer, isActive]);

  const handleReset = () => {
    setActive(!isActive);
    setTimer(0);
  };

  return (
    <div>
      <ChallengeHeader title={"Stopwatch"} />
      <div className="m-4">
        <p>Stopwatch</p>
        <p>
          {timer > 600
            ? Number.parseInt(timer / 600)
                .toString()
                .padStart(2, "0")
            : "00"}{" "}
          minutes :
          {timer > 10
            ? Number.parseInt(timer / 10)
                .toString()
                .padStart(2, "0")
            : "00"}{" "}
          seconds : {timer} milliseconds
        </p>
        <button
          onClick={() => setActive(!isActive)}
          className={`stopped border p-2 disabled:bg-red-200 hover:cursor-pointer disabled:cursor-auto`}
          disabled={isActive}
        >
          Start
        </button>
        <button
          onClick={() => setActive(!isActive)}
          className={`started border p-2 disabled:bg-red-200 hover:cursor-pointer disabled:cursor-auto`}
          disabled={!isActive}
        >
          Pause
        </button>
        <button
          onClick={handleReset}
          className={`started border p-2 disabled:bg-red-200 hover:cursor-pointer disabled:cursor-auto`}
          disabled={!isActive}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
