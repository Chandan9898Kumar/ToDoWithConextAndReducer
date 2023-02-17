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

  const handleClick = (event) => {
    event.preventDefault();
    setAllData([
      ...allData,
      {
        id: allData.length + 1,
        subject: textInput,
      },
    ]);

    setTextInput("");
  };

  return (
    console.log(allData, "all data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"),
    (
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
                        <span style={{fontSize:'large',fontWeight:'bolder'}}>Subject : {item.subject.toUpperCase()}</span>
                        {"  "}
                      </div>
                      <div>
                        <Button variant="secondary" type="submit">
                          Edit
                        </Button>{" "}
                        <Button variant="secondary" type="submit">
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
    )
  );
};
export default ToDoAppOne;

{
  /* <h2 style={{ display: "inline-block" }}>Subject :</h2>{" "} */
}
