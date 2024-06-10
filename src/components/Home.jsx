import React, { useState } from 'react';
import User from './User';
import Admin from './Admin';

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Generation Thailand</h1>
        <h1 className="text-4xl font-bold">Ben React Assessment</h1>
      </div>
      <div className="space-x-16 mb-8"> {/* Increased space between buttons */}
        <button
          onClick={() => setShowAdmin(false)}
          className="bg-white text-black font-bold py-4 px-4 rounded-lg shadow-lg"
        >
          User Home Sector
        </button>
        <button
          onClick={() => setShowAdmin(true)}
          className="bg-white text-black font-bold py-4 px-4 rounded-lg shadow-lg"
        >
          Admin Home Sector
        </button>
      </div>
      {showAdmin ? (
        <Admin
          employees={employees}
          addEmployee={addEmployee}
          deleteEmployee={deleteEmployee}
        />
      ) : (
        <User employees={employees} />
      )}
    </div>
  );
};

export default Home;
