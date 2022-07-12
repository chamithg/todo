import React, { useState } from "react";

export default function AddToDo({ handleTask }) {
  const [input, setInput] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    handleTask(task);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={addTask}>
        <div
          className="form-control"
          style={{ backgroundColor: "lightsteelblue" }}>
          <label>Add task: </label>
          <br />
          <input
            type="text"
            name="task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-50"
          />
          <br />
          <br />
          <input type="submit" value="add" className="btn btn-success w-25" />
        </div>
      </form>
    </div>
  );
}
