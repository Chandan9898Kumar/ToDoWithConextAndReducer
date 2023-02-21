import React from "react";
import TransferData from "./ContextData";
import AddToList from "./AddTask";
import ListingAllItem from "./ListItems";
import "./todoContextStyle.css";
const ContextTodo = () => {
  return (
    <TransferData>
      <div className="container">
        <div className="childContainer">
          <h1>ToDo With ContextAPi</h1>
          <div>
            <AddToList />
          </div>
          <div style={{ marginTop: "10px" }}>
            <ListingAllItem />
          </div>
        </div>
      </div>
    </TransferData>
  );
};
export default ContextTodo;

//  Here <AddToList />  and <ListingAllItem />  are the children of  <TransferData>. So as compare to previous  todoList where we use Reducer
// we had pass functions,state in these component,but with context,we put this inside a main function (of context component)
