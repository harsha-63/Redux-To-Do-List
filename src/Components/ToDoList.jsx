import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, editTask } from "./Slice";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTaskValue, setEditTaskValue] = useState("");
  const { tasks } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask(task));
    setTask("");
};


  const handleEdit = (taskValue) => {
    setEditingIndex(taskValue.index);
    setEditTaskValue(taskValue.task);
  };

  const handleUpdateTask = (index) => {
    dispatch(editTask({ index, updatedTask: editTaskValue }));
    setEditingIndex(null);
    setEditTaskValue("");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">To-Do List</h1>
      
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new task"
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTask}
          className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </div>
      
      <ul className="list-disc pl-6">
        {tasks.map((taskValue) => (
          <li key={taskValue.index} className="mb-2 text-gray-700 flex items-center">
            {editingIndex === taskValue.index ? (
              <>
                <input
                  type="text"
                  value={editTaskValue}
                  onChange={(e) => setEditTaskValue(e.target.value)}
                  className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => handleUpdateTask(taskValue.index)}
                  className="ml-3 bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="flex-grow">{taskValue.task}</span>
                <button
                  onClick={() => handleEdit(taskValue)}
                  className="ml-3 bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteTask(taskValue.index))}
                  className="ml-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;



