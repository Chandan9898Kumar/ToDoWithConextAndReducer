import React, { useContext, useState } from "react";
import { taskContext, tasksDispatchContext } from "./ContextData";

const ListingAllItem = () => {
  const tasks = useContext(taskContext);
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
export default ListingAllItem;

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(tasksDispatchContext);
  let manageTaskContent;

  if (isEditing) {
    manageTaskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(event) => {
            dispatch({
              type: "Edit",
              payload: {
                ...task,
                text: event.target.value,
              },
            });
          }}
        />
        {"  "}{"  "}
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    manageTaskContent = (
      <>
        {task.text}{"  "}{"  "}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      {manageTaskContent}{"  "}{"  "}
      <button
        onClick={() => {
          dispatch({
            type: "Deleted",
            payload: task,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
