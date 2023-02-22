import React, { useState, useEffect } from "react";
import "./localStyle.css";
import Button from "react-bootstrap/Button";

// getting data from localStorage,now after adding whenever we refresh the page,our data will not erased.
const getDataLocalStorage = () => {
  let fetchedData = localStorage.getItem("storedData");
  if (fetchedData && fetchedData.length) {
    return JSON.parse(localStorage.getItem("storedData"));
  } else {
    return [];
  }
};

const ToDoLocalStorage = () => {
  const [allData, setAllData] = useState(getDataLocalStorage());
  const [textInput, setTextInput] = useState("");
  const [editCondition, setEditCondition] = useState(false);
  const [itemId, setItemId] = useState("");

  //  by storing data like this,whenever allData got changes,our data get stored there but when we refresh the page all data got erased,
  // so to handle it we will take a function getDataLocalStorage() to get data from localStorage as we insert anything in allData.
  // and put it in useState.
  useEffect(() => {
    localStorage.setItem("storedData", JSON.stringify(allData));
  }, [allData]);

  const handleClick = (event) => {
    event.preventDefault();
    if (textInput === "" || textInput.trim() === "") {
      return;
    }
    setAllData([
      ...allData,
      {
        id: Date.now(),
        subject: textInput,
      },
    ]);

    setTextInput("");
  };

  function deleteItem(event, id) {
    event.preventDefault();
    setAllData(allData.filter((item) => item.id !== id));
  }

  function editItem(event, id) {
    event.preventDefault();
    setItemId(id);
    setEditCondition(!editCondition);
  }

  const changeItem = (event, value) => {
    setAllData(
      allData.map((item, index) => {
        if (item.id === value.id) {
          return { ...item, subject: event.target.value };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="centerElement">
      <div className="mainComponent">
        <div className="label">
          <label>ToDo App With LocalStorage</label>
        </div>

        <div className="handleInputButton">
          <input
            className="inputText"
            type="text"
            placeholder="Type your task here..."
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
          />{" "}
          {"  "}
          <Button
            style={{ width: "100px" }}
            variant="secondary"
            type="submit"
            onClick={(event) => handleClick(event)}
          >
            Add
          </Button>{" "}
        </div>

        <div className="setListItem">
          {allData &&
            allData.map((item, index) => {
              return (
                <div key={index} className="">
                  <div style={{ display: "inline-flex" }}>
                    <div>
                      <span style={{ fontSize: "large", fontWeight: "bolder" }}>
                        Subject :{" "}
                        {item.id === itemId && editCondition
                          ? ""
                          : item.subject.toUpperCase()}{" "}
                      </span>
                    </div>

                    <div className="setEditAndDeleteButton">
                      {item.id === itemId && editCondition && (
                        <input
                          className="editInputText"
                          type="text"
                          placeholder="Edit Item ..."
                          value={item.subject}
                          onChange={(event) => changeItem(event, item)}
                        />
                      )}
                      {"  "}
                      {"  "}
                      <Button
                        style={{ width: "100px" }}
                        variant="secondary"
                        type="submit"
                        onClick={(event) => editItem(event, item.id)}
                      >
                        {item.id === itemId && editCondition ? "Save" : "Edit"}
                      </Button>{" "}
                      <Button
                        style={{ width: "100px" }}
                        variant="secondary"
                        type="submit"
                        onClick={(event) => deleteItem(event, item.id)}
                      >
                        Delete
                      </Button>{" "}
                    </div>
                  </div>
                  <br />
                  <br />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ToDoLocalStorage;
