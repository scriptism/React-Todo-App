import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FiPlus, FiTrash2, FiCheck, FiEdit, FiX } from "react-icons/fi";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error("Error parsing saved todos", error);
      return [];
    }
  });

  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [inputError, setInputError] = useState(false);

  // Load todos from localStorage on initial render
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Error saving todos", error);
    }
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: uuidv4(), text: input, completed: false }]);
      setInput("");
      setInputError(false);
    } else {
      setInputError(true);
      setTimeout(() => setInputError(false), 1500);
      //   resets after 1.5s
    }
  };

  const deleteTodo = (id) => {
    // console.log("Deleting todo with ID:", id);
    setTodos(todos.filter((todo) => todo.id !== id));
    // Creates a new array with all ids false except the one to delete
    // i.e. {id: 2, text: "Walk dog", completed: true}
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditInput(text);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editInput } : todo
      )
    );
    setEditingId(null);
    // This hides the edit input field in the UI,  Editing closed
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500/90 to-purple-500 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">
          Todo App
        </h1>

        {/* Add Todo Form */}
        <div className="flex mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTodo()}
            placeholder="Add a new task..."
            className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={addTodo}
            className={`p-3 rounded-r-lg transition-all duration-300 ${
              inputError
                ? "bg-red-500 hover:bg-red-600"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {inputError ? (
              <FiX
                size={20}
                className="transform transition-all duration-300 animate-ping-once"
              />
            ) : (
              <FiPlus size={20} className="transition-transform duration-200" />
            )}
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                todo.completed
                  ? "bg-gray-50 border-gray-200"
                  : "bg-white border-gray-300"
              }`}
            >
              {editingId === todo.id ? (
                <div className="flex-grow flex">
                  <input
                    type="text"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded-l-lg"
                  />
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="bg-green-500 text-white p-2 rounded-r-lg hover:bg-green-600"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center space-x-3 flex-grow">
                    <button
                      onClick={() => toggleComplete(todo.id)}
                      className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                        todo.completed
                          ? "bg-green-500 border-green-500 text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {todo.completed && <FiCheck size={14} />}
                    </button>
                    <span
                      className={`flex-grow ${
                        todo.completed
                          ? "line-through text-gray-400"
                          : "text-gray-700"
                      }`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => startEditing(todo.id, todo.text)}
                      className="text-blue-500 hover:text-blue-700 transition-all duration-200 transform hover:scale-125"
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-500 hover:text-red-700 transition-all duration-200 transform hover:scale-125"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Stats */}
        {todos.length > 0 && (
          <div className="mt-6 text-sm text-gray-500">
            {todos.filter((t) => t.completed).length} of {todos.length} tasks
            completed
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
