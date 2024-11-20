import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import Register from "./page/Register";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
