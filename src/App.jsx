import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <nav className="flex justify-end font-bold border-b border-solid border-black space-x-4 p-4">
        <Link to="/" className="text-black">
          Home
        </Link>
        <Link to="/owner" className="text-black">
          Owner
        </Link>
      </nav>
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
