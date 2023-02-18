import React, { useState } from "react";
import "./todoOneStyle.css";
import Button from "react-bootstrap/Button";
let details = [
  {
    id: 0,
    subject: "SST",
  },
  {
    id: 1,
    subject: "DSA",
  },
  {
    id: 2,
    subject: "PT",
  },
];

const ToDoAppOne = () => {
  const [allData, setAllData] = useState(details);
  const [textInput, setTextInput] = useState("");
  const [editCondition, setEditCondition] = useState(false);
  const [itemId, setItemId] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    if (textInput === "" || textInput.trim() === "") {
      return;
    }
    setAllData([
      ...allData,
      {
        id: allData.length + 1,
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

    //                                                OR
    // setAllData(allData.map((item, index) =>item.id===value.id ? {...item,subject:event.target.value}:item));
    
    // Below we have taken {} curly braces,hence we have to use return,if we remove return then error will show.
    // in above we have not use {} curly braces,hence we directly implemented

    //                                                OR
    // setAllData(allData.map((items)=> {
    //     return  items.id===value.id ? {...items,subject:event.target.value}: items
    //   }))

    //                                                OR
    // const newData = allData.map((items) => {
    //     return items.id === value.id ? { ...items, subject: event.target.value } : items
    // })
    // setAllData(newData)

  };

  return (
    <div className="centerElement">
      <div className="mainComponent">
        <div>
          <label
            style={{
              marginRight: "70px",
              marginTop: "5px",
              marginBottom: "5px",
              fontSize: "large",
            }}
          >
            ToDo App
          </label>
        </div>

        <div>
          <input
            className="inputText"
            type="text"
            placeholder="Type your task here..."
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
          />{" "}
          <span>
            <Button
              variant="secondary"
              type="submit"
              onClick={(event) => handleClick(event)}
            >
              Add
            </Button>{" "}
          </span>
        </div>
        <div>
          {allData &&
            allData.map((item, index) => {
              return (
                <div key={index} className="propData">
                  <div style={{ display: "inline-flex" }}>
                    <div>
                      <span style={{ fontSize: "large", fontWeight: "bolder" }}>
                        Subject :{" "}
                        {item && item.subject && item.subject.toUpperCase()}
                      </span>
                      {"  "}
                    </div>
                    <div>
                      {item.id === itemId && editCondition && (
                        <input
                          type="text"
                          placeholder="Edit Item ..."
                          value={item.subject}
                          onChange={(event) => changeItem(event, item)}
                        />
                      )}
                      <Button
                        variant="secondary"
                        type="submit"
                        onClick={(event) => editItem(event, item.id)}
                      >
                        {item.id === itemId && editCondition ? "Save" : "Edit"}
                      </Button>{" "}
                      <Button
                        variant="secondary"
                        type="submit"
                        onClick={(event) => deleteItem(event, item.id)}
                      >
                        Delete
                      </Button>{" "}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ToDoAppOne;
