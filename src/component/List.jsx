import React from "react";
import Swal from "sweetalert2";
function List({ todo, onEdit }) {
  const handleEditTodo = () => {
    // Trigger SweetAlert popup
    Swal.fire({
      title: "Edit Task", // Title of the popup
      input: "text", // Show an input field
      inputValue: todo, // Pre-fill the input with the current task text
      showCancelButton: true, // Show a "Cancel" button
      confirmButtonText: "Save", // Text for the "Save" button
      cancelButtonText: "Cancel", // Text for the "Cancel" button
      inputValidator: (value) => {
        // Validation for empty input
        if (!value.trim()) {
          return "Please enter something!"; // If empty, show error message
        }
        return null;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // If "Save" was clicked

        onEdit(result.value); // Update the task with the new value
        Swal.fire("Saved!", "Your task has been updated.", "success"); // Success message
      }
    });
  };
  return (
    <div>
      <div className="mx-6 mt-2">
        <div className="flex gap-2">
          <input type="checkbox" className="h-6 w-6" />
          <p>{todo}</p>
        </div>
        <div className="flex gap-2 mt-2">
          <button
            className="border border-blue-200 w-full p-1"
            onClick={handleEditTodo}
          >
            Edit
          </button>
          <button className="border border-blue-200 w-full p-1 bg-red-600 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
