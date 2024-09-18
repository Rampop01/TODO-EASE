import { useState } from "react";
import List from "./component/List";

function App() {
  const [allTodo, setAllTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (!inputValue.trim()) {
      return;
    }
    setAllTodo([...allTodo, { text: inputValue, isComplete: false }]);
    setInputValue("");
  };

  const editTodo = (index, newValue) => {
    const newTodo = allTodo.map((eachTodo, i) => {
      // Return the updated todo when the index matches, otherwise return the original todo
      if (i === index) {
        return { ...eachTodo, text: newValue }; // Update the text field with the new value
      }
      return eachTodo; // Return the original todo for non-matching indexes
    });
    setAllTodo(newTodo);
  };
  return (
    <div className="bg-white shadow-sm shadow-black md:mx-80 mx-4 md:mt-10 mt-20 pb-10 ">
      <div className="mx-8 ">
        <div className="flex justify-between items-center pt-4">
          <h1 className="text-3xl ">TODO-EASE</h1>
          <img
            src="https://img.freepik.com/free-photo/rag-doll-with-giant-magnifying-glass-question-mark_1156-263.jpg?ga=GA1.1.148381924.1699598539"
            alt=""
            className="h-12 w-12 object-contain"
          />
        </div>
        <hr className="mt-4" />
        <h1 className="text-center text-xl p-2">What needs to be done?</h1>
        <input
          type="text"
          className="w-full h-12 border-2 border-blue-200 "
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="w-full bg-blue-300 mt-2 p-2 font-bold"
          onClick={addTodo}
        >
          Add
        </button>

        <div className="flex mx-6 mt-2 justify-between gap-2 ">
          <button className="border border-blue-200 w-full p-1">All</button>
          <button className="border border-blue-200 w-full p-1"> Active</button>
          <button className="border border-blue-200 w-full p-1">
            Completed
          </button>
        </div>

        <h1 className="font-bold mt-4 mx-6 text-xl">3 tasks remaining</h1>
        <div>
          {allTodo.map((eachTodo, index) => (
            <List
              key={index}
              todo={eachTodo.text}
              onEdit={(newValue) => editTodo(index, newValue)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
