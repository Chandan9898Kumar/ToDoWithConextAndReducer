import React, { useState } from "react";
import "./reducerStyles.css";
const FinalItemRender = ({ deleteItem, editItem, Task }) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          className="inputTextStyle"
          value={Task.text}
          onChange={(event) => {
            // Here we destructed Task item,where we are preserving other state,and simply changing text property which is inside Task.
            // as Task is an Object,so if we are using other new key(property) in an object instead of existing property,
            // then it will add that key-value in it. like if we use //   home:'USA',then it will add this property there along with rest data.
            editItem({
              ...Task,
              text: event.target.value,
              //   home:'USA'
            });
          }}
        />{" "}
        <button
          style={{ borderRadius: "15px", height: "44px", width: "77px" }}
          onClick={(event) => {
            event.stopPropagation();
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {Task.text}{" "}
        <button
          className="buttonEdit"
          onClick={(event) => {
            event.stopPropagation();
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    console.log(isEditing, "isedit"),
    (
      <div>
        <label>
          {taskContent}{" "}
          <button
            className="buttonDelete"
            onClick={(event) => deleteItem(event, Task)}
          >
            Delete
          </button>
        </label>
      </div>
    )
  );
};
export default FinalItemRender;
