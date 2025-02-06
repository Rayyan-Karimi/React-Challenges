import { useState, useEffect } from "react";
import Red from "../helpers/TrafficLightsRed";
import Yellow from "../helpers/TrafficLightsYellow";
import Green from "../helpers/TrafficLightsGreen";
import ChallengeHeader from "../../util/ChallengeHeader";

function TrafficLights() {
  const [activeLight, setActiveLight] = useState("red");
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          switch (activeLight) {
            case "red":
              setActiveLight("green");
              return 3;
            case "green":
              setActiveLight("yellow");
              return 2;
            case "yellow":
              setActiveLight("red");
              return 5;
            default:
              break;
          }
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [activeLight]);

  return (
    <div>
      <ChallengeHeader title={"Traffic Lights"} />
      <p className="text-center">
        This is an implementation of the Traffic lights system, where a timer
        handles which light will glow and for how much time.
      </p>
      <div className="flex flex-col gap-6 justify-center items-center mt-10">
        <div className="bg-black h-72 w-30 rounded-2xl flex flex-col items-center justify-center">
          <Red isActive={activeLight === "red"} />
          <Yellow isActive={activeLight === "yellow"} />
          <Green isActive={activeLight === "green"} />
        </div>
        <p className="text-lg font-bold">{timer} Seconds</p>
      </div>
    </div>
  );
}

TrafficLights.propTypes = {};

export default TrafficLights;
