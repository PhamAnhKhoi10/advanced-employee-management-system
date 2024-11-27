// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./page/Dashboard";
import Notification from "./page/Notification";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./page/Login";
import Performance from "./page/Performance";
import Attendance from "./page/Attendance";
import Landing from "./page/Landing";
import CalculateSalary from "./page/CalculateSalary";

const App = () => {
  return (
    <Routes>
      {/* Put all routes that does not need Nav bar and Side Bar Here */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landing />} />

      {/* Put all routes that need Nav bar and Side Bar Here */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/employee/salary" element={<CalculateSalary/>} />
        <Route path="/salary" element={<h1>Salary</h1>} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/performance" element={<Performance />} />
      </Route>
    </Routes>
  );
};

export default App;
