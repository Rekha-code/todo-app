import { useState } from "react";
import { MdAddCircle } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" action="" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
            className="kg-input" />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} className="kg-input" />
        </div>
        <div className="col-2">
          <button
            
            className="btn btn-success kg-button kg-add"
          >
            <MdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
