import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  const isPastDeadline = todo.deadline && new Date() > new Date(todo.deadline);
  const isCompletedLate = todo.completed && isPastDeadline;

  // Determine the border color based on completion and deadline
  let borderColor;
  if (todo.completed && isCompletedLate) {
    borderColor = 'border-yellow-500'; // Yellow for late completion
  } else if (todo.completed && !isCompletedLate) {
    borderColor = 'border-green-500'; // Green for on-time completion
  } else if (isPastDeadline) {
    borderColor = 'border-red-500'; // Red for overdue, not completed
  } else {
    borderColor = 'border-tomato'; // Default color
  }

  return (
    <div className={`flex bg-white shadow-lg rounded-lg overflow-hidden mb-4 border-l-4 ${borderColor}`}>
      {todo.imageUrl && (
        <img
          src={todo.imageUrl}
          alt="Task"
          className="w-24 h-24 object-cover"
        />
      )}
      <div className="flex flex-col flex-grow p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-cinnabar">{todo.title}</h3>
          {todo.deadline && (
            <span className="text-sm text-gray-500">
              {new Date(todo.deadline).toLocaleDateString()}
            </span>
          )}
        </div>
        <p className="text-gray-700 mb-2">{todo.description}</p>
        
        <div className="flex items-center justify-between mt-3">
          <button
            onClick={() => toggleComplete(todo.id)}
            className={`px-4 py-2 text-white font-semibold rounded ${
              todo.completed ? 'bg-gray-400' : 'bg-tomato hover:bg-orangeCrayola'
            } transition`}
          >
            {todo.completed ? 'Completed' : 'Mark as Completed'}
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-vermilion text-sm font-semibold hover:text-cinnabar transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
