import React from 'react';

const Table = ({ employees = [], deleteEmployee }) => {
  return (
    <div>
      
      <table className="w-full bg-white rounded-sm border border-gray-300">
        <thead className="bg-zinc-100">
          <tr>
            <th className="text-sm font-bold py-3 px-6 border border-gray-300">Name</th>
            <th className="text-sm font-bold py-3 px-6 border border-gray-300">Lastname</th>
            <th className="text-sm font-bold py-3 px-6 border border-gray-300">Position</th>
            <th className="text-sm font-bold py-3 px-6 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="py-2 px-8 border border-gray-300 text-xs">{employee.name}</td>
              <td className="py-2 px-8 border border-gray-300 text-xs">{employee.lastname}</td>
              <td className="py-2 px-8 border border-gray-300 text-xs">{employee.position}</td>
              <td className="py-2 px-8 border border-gray-300">
                {deleteEmployee && (
                  <button className="text-red-500 hover:text-red-600 font-bold py-1 px-3"
                          onClick={() => deleteEmployee(employee.id)}>Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
