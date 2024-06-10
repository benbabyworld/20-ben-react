import React, { useState } from 'react';

const Form = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { id: Date.now(), name, lastname, position };
    addEmployee(newEmployee);
    setName('');
    setLastname('');
    setPosition('');
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Create User Here</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center md:flex-row md:items-center md:justify-center">
        <div className="flex-1 mb-4 md:mr-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Name..."
            className="w-full bg-white border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div className="flex-1 mb-4 md:mx-2">
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
            placeholder="Lastname..."
            className="w-full bg-white border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div className="flex-1 mb-4 md:ml-2">
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
            placeholder="Position..."
            className="w-full bg-white border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mb-4 rounded-lg"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
