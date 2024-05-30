import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlertText }) => {

  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    let errorText = "";
    
    if (Number.isNaN(Number(value))) {
        errorText = "Only numbers are allowed.";
    } else if (value < 0) {
        errorText = "Only positive numbers are allowed.";
    }

    setErrorAlertText(errorText);

    // Update state only if input is a valid number
    if (!Number.isNaN(Number(value)) && Number(value) >= 0) {
        setNumber(value);
        setCurrentNOE(value);
    }
  }

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
        role="textbox"
      />
    </div>
  );
}

export default NumberOfEvents;
