import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </div>
  );
};

export default App;
