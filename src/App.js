import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Spinner from "./Spinner/Spinner";
import HomePage from "./HomageAnimation/HomeAnimation";
import TabsExample from './NavLink/NavLink'
const ToDoAppOne=lazy(()=>import('./NormalTodoApp/NormalTodo'))

function App() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
        <TabsExample />
          <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path ='/normalTodoApp' element={<ToDoAppOne />}/>
            


          </Routes>
        </BrowserRouter>
      </Suspense>
     </div>
  );
}

export default App;
