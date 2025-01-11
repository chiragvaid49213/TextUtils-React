import React, { useState } from "react";
import "./TextForm.css";
import propTypes from "prop-types";

// useState is a React Hook that lets you add state to a functional component.
// It allows components to store and manage dynamic data that can change over time (like user inputs, toggles, counters, etc.).

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // event is used to update or change the text in the text box
    console.log("On Change");
    setText(event.target.value);
  };

  //   Uppercase -
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    // setText("You have clicked on handleUpClick"); // setting text by useState
    let newText = text.toUpperCase();
    setText(newText);
  };

  //   Lowercase -
  const handleDownClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  //   Clear Text -
  const handleClearClick = () => {
    console.log("Clear Text was clicked");
    let newText = "";
    setText(newText);
  };

  const [text, setText] = useState(null); // Using useState

  return (
    <>
      <div className="text-area-container">
        {/* Heading */}
        <div className="title">
          <label htmlFor="custom-text-area" className="text-area-label">
            <h1>{props.heading}</h1>
          </label>
        </div>

        {/* Textarea */}
        <div>
          <textarea
            id="custom-text-area"
            className="custom-text-area"
            value={text} // using useState
            onChange={handleOnChange} // using useState
            rows={12}
            placeholder="Type your message here..."
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button
            className="btn"
            onClick={handleUpClick} //using useState
          >
            Convert to Uppercase
          </button>
          <button
            className="btn"
            onClick={handleDownClick} //using useState
          >
            Convert to Lowercase
          </button>
          <button
            className="btn"
            onClick={handleClearClick} //using useState
          >
            Clear Text
          </button>
        </div>

        {/* Text Summary */}
        <div className="summary">
          <h1>Text Summary</h1>
          <p>
            {text === null || text === ""
              ? "No "
              : text.split(" ").length + " "}
            words and
            {text === null || text === "" ? " " : " " + text.length + " "}
            characters
          </p>

          <h1>Preview</h1>
          <p>{text ? text : "No Preview available"}</p>
        </div>
      </div>
    </>
  );
}

// TextForm.propTypes = {};
