import React  from "react";
import PropTypes from "prop-types";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

  const handleInputChanged = (event) => {
    const value = event.target.value;
    console.log("THE VALUE IS:", value);
    setCurrentNOE(value);
    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "only positive number are valid";
      setErrorAlert(errorText);
    } else {
      errorText = "";
      setErrorAlert(errorText);
      setCurrentNOE(value);
    }
  };

  return (
    <div id="number-of-events">
      <p>Number of Events:</p>
      <input
        data-testid="event-number-imput"
        type="text"
        className="event-number"
        // placeholder="32"
        defaultValue="32"
        onChange={handleInputChanged}
      />
    </div>
  );
};

// Define PropTypes for the 'NumberOfEvents' component
NumberOfEvents.propTypes = {
  setCurrentNOE: PropTypes.func.isRequired,
  setErrorAlert: PropTypes.func.isRequired,
};

export default NumberOfEvents;