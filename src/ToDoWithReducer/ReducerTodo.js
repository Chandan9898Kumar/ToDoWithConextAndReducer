import React, { useReducer } from "react";
import reduce from "./ReduceFunction";
import "./reducerStyles.css";
import AddToDoTask from "./AddToDo";

import UpdateTodo from "./ModifyTodo";
const initialState = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
const ToDoReducerApp = () => {
  const [state, dispatch] = useReducer(reduce, initialState);

  const handleAddTask = (event, item) => {
    event.preventDefault();
    dispatch({
      type: "Add",
      payload: item,
    });
  };

  const deleteItem = (event, item) => {
    event.preventDefault();
    dispatch({
      type: "Delete",
      payload: item,
    });
  };

  const editItem = (tasks) => {
    //  as we are changing input values there itself by destructuring so,
    // here we simply sending an object,instead of event.target.value to change input element.
    dispatch({
      type: "Change",
      payload: tasks,
    });
  };

  return (
    <div className="headContainer">
      <div className="childContainer">
        <h1>ToDo With Reducer</h1>
        <AddToDoTask handleAddTask={handleAddTask} />
        <UpdateTodo deleteItem={deleteItem} editItem={editItem} state={state} />
      </div>
    </div>
  );
};
export default ToDoReducerApp;

// In above we had pass functions,state in these two component,but instead of that we can make it short by using contextApi.
// and instead of passing these functions,we can do our work by simply using dispatch method in eventHandlers(using contextApi->
// check next app--> TodoWithContext).
