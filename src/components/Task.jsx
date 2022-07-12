import React from "react";

export default function Task({ task, id, handleDelete, handleComplete }) {
  const { taskContent, completed } = task;

  const markComplete = (e) => {
    handleComplete(e, id);
  };

  const deleteTask = () => {
    handleDelete(id);
  };

  return (
    <div
      className="p-2 m-1"
      style={{
        color: "white",
        backgroundColor: "lightSlateGray",
        borderRadius: 10,
      }}>
      <h3 style={{ textDecoration: completed ? "line-through" : "" }}>
        {id}: {taskContent}
        <input
          className="ms-5"
          type="checkBox"
          value={completed}
          onChange={(e) => markComplete(e.target.checked)}
        />
        <button className="btn btn-danger  ms-5 mt-1" onClick={deleteTask}>
          Delete
        </button>
      </h3>
    </div>
  );
}
