import { useState } from "react";
import ChallengeHeader from "../../util/ChallengeHeader";

function TelephoneFormatter() {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    let theInput = event.target.value.replace(/\D/g, "");
    if (theInput.length > 10) theInput = theInput.slice(0, 10);
    let formattedInput = theInput;
    if (theInput.length > 3)
      formattedInput = `+(${theInput.slice(0, 3)}) - ${theInput.slice(3)}`;
    setInput(formattedInput);
  };

  return (
    <div>
      <ChallengeHeader title={"Telephone Formatter"} />
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Mobile number"
          className="text-black text-center border"
          maxLength="16"
        />
        <p>+(123) - 4567890</p>
      </div>
    </div>
  );
}

export default TelephoneFormatter;
