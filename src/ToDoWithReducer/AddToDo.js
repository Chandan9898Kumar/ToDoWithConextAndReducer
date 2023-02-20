import React, { useState } from "react";
import "./reducerStyles.css";
const AddToDoTask = ({ handleAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div style={{ width: "400px" }}>
      <input
        className="inputClass"
        value={inputValue}
        type="text"
        placeholder="Add To List ..."
        onChange={(event) => setInputValue(event.target.value)}
      />{" "}
      <button
        className="buttonClass"
        type="submit"
        onClick={(event) => {
          if (inputValue === "") {
            return;
          }
          handleAddTask(event, inputValue);
          setInputValue("");
        }}
      >
        ADD
      </button>
    </div>
  );
};
export default AddToDoTask;
