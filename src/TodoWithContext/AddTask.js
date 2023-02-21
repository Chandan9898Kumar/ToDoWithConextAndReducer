import React, { useContext, useState } from "react";
import { tasksDispatchContext } from "./ContextData";
let nextId = 0;
const AddToList = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(tasksDispatchContext);
  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="Add To List ..."
        onChange={(event) => setText(event.target.value)}
      />
      {"  "}
      {"  "}
      <button
        onClick={(event) => {
          event.preventDefault();
          if (text === "" || text.trim().length === 0) {
            return;
          }
          setText("");
          dispatch({
            type: "Add",
            payload: {
              text: text,
              id: nextId++,
            },
          });
        }}
      >
        Add
      </button>
    </div>
  );
};
export default AddToList;
