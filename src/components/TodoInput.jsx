import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const deadline = date ? new Date(date) : null;
      addTodo({
        title,
        description,
        deadline,
        imageUrl,
        completed: false,
      });
      setTitle('');
      setDescription('');
      setDate('');
      setImageUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6 p-4 bg-platinum rounded-lg shadow-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-orangeCrayola"
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 rounded p-3 h-24 focus:outline-none focus:ring-2 focus:ring-orangeCrayola"
        placeholder="Description"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-orangeCrayola"
      />
      <input
        type="url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-orangeCrayola"
        placeholder="Image URL (optional)"
      />
      <button type="submit" className="bg-tomato text-white rounded p-3 font-semibold hover:bg-orangeCrayola transition">
        Add Task
      </button>
    </form>
  );
}

export default TodoInput;
