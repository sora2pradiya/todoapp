"use client"

import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-full mr-2"
            placeholder="Add a new task"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white p-2 rounded-lg"
          >
            Add
          </button>
        </div>
        <ul className="list-disc pl-5">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(index)}
                className="mr-2"
              />
              <span
                className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}
              >
                {task.text}
              </span>
              <button
                onClick={() => handleRemoveTask(index)}
                className="text-red-500 ml-2"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
