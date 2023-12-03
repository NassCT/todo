import { useState } from "react";
import checkIcon from "/checkIcon.svg";
import trashIcon from "/trashIcon.svg";

import "./App.css";
function App() {
  return (
    <div>
      <Form />
      
    </div>
  );
}

function Form() {
  return (
    <>
      <input type="text" name="todo" id="todo" placeholder=""/> <Button />
    </>
  );
}

function Button() {
  return <button>Add</button>;
}

function CheckI() {
  return (
    <>
      <img src={checkIcon} alt="CheckIcon" />
    </>
  );
}

function TrashI() {
  return (
    <>
      <img src={trashIcon} alt="TrashIcon" />
    </>
  );
}

export default App;
