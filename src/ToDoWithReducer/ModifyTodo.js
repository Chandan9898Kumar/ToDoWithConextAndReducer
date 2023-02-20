import React from "react";
import "./reducerStyles.css";
import FinalItemRender from "./RenderFinalItem";
const UpdateTodo = ({ deleteItem, editItem, state }) => {
  return (
    <div>
      {/* <ul className="allTodo"> */}
        {state.map((item) => (
          <li className="singleTodo" key={item.id}>
            <FinalItemRender
              deleteItem={deleteItem}
              editItem={editItem}
              Task={item}
            />
          </li>
        ))}
      {/* </ul> */}
    </div>
  );
};
export default UpdateTodo;
