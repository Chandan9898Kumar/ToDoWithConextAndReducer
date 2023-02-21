import React, { createContext, useReducer } from "react";
import reducer from "./ReducerFunction";
const taskContext = createContext(null);
const tasksDispatchContext = createContext(null);
let initialValue = [];
const TransferData = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    (
      <div>
        <taskContext.Provider value={state}>
          <tasksDispatchContext.Provider value={dispatch}>
            {children}
          </tasksDispatchContext.Provider>
        </taskContext.Provider>
      </div>
    )
  );
};
export default TransferData;
export { taskContext };
export { tasksDispatchContext };
