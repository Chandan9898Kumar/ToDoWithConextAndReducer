import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Spinner from "./Spinner/Spinner";
import HomePage from "./HomageAnimation/HomeAnimation";
import TabsExample from "./NavLink/NavLink";
const ToDoAppOne = lazy(() => import("./NormalTodoApp/NormalTodo"));
const TodoAppNew = lazy(() => import("./TodoAppSecond/TodoAppSecVersion"));
const ToDoReducerApp = lazy(() => import("./ToDoWithReducer/ReducerTodo"));
const ContextTodo = lazy(() => import("./TodoWithContext/TodoWithContext"));
const ToDoLocalStorage = lazy(()=>import("./TodoWithLocalStorage/LocalToDo"));

function App() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <TabsExample />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/normalTodoApp" element={<ToDoAppOne />} />
            <Route exact path="/normalTodoAppNew" element={<TodoAppNew />} />
            <Route exact path="/TodoReducer" element={<ToDoReducerApp />} />
            <Route exact path="/TodoContext" element={<ContextTodo />} />
            <Route exact path="/TodoLocal" element={<ToDoLocalStorage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
