import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import Notification from "./page/Notification";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
    </div>
  );
};

export default App;
