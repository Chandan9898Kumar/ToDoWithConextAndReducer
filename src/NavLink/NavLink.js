import React from "react";
// import { NavLink } from "react-router-dom";
function TabsExample() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="/normalTodoApp">
                ToDo One
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/TodoAppWithReducer">
                ToDO With Reducer
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/TodoAppWithContext">
                ToDO With Context
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/TodoAppWithStorage">
                ToDO With LocalStorage
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="text" placeholder="Search" />
            <button class="btn btn-primary" type="button">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default TabsExample;
