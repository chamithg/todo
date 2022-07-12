import React, { useState, useEffect } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTask = (taskContent) => {
    setTasks([...tasks, { taskContent: taskContent, completed: false }]);
  };

  const handleDelete = (id) => {
    const currentTasks = [...tasks];
    const deleteId = id;
    handleComplete(false, deleteId);
    const newTasks = currentTasks.filter(
      (task) => currentTasks.indexOf(task) !== deleteId - 1
    );
    setTasks(newTasks);
  };

  const handleComplete = (e, id) => {
    const currentTasks = [...tasks];
    const tempTask = currentTasks[id - 1];
    tempTask.completed = e;
    currentTasks[id - 1] = tempTask;
    setTasks(currentTasks);
  };

  useEffect(() => {
    const data = window.localStorage.getItem("MY_TASK_LIST");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("MY_TASK_LIST", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <div className="container m-5 bg-light w-50">
        <h1 className="mb-5">To do list</h1>
        <div className="task-container">
          {tasks.map((task, index) => {
            return (
              <Task
                key={index}
                task={task}
                id={index + 1}
                handleDelete={handleDelete}
                handleComplete={handleComplete}
              />
            );
          })}
        </div>
        <AddToDo handleTask={handleTask} />
      </div>
    </div>
  );
}

export default App;
