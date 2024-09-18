import React from "react";

function List({ todo }) {
  return (
    <div>
      <div className="mx-6 mt-2">
        <div className="flex gap-2">
          <input type="checkbox" className="h-6 w-6 border-2xl" />
          <p>{todo}</p>
        </div>
        <div className="flex gap-2 mt-2">
          <button className="border border-blue-200 w-full p-1">Edit</button>
          <button className="border border-blue-200 w-full p-1 bg-red-600 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
