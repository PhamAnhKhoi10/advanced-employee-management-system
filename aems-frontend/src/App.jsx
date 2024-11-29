import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./page/Dashboard";
import Notification from "./page/Notification";
import Login from "./page/Login";
import Performance from "./page/Performance";
import Attendance from "./page/Attendance";
import Landing from "./page/Landing";
import CalculateSalary from "./page/CalculateSalary";
import SendLeaveRequest from "./page/SendLeaveRequest";
import AttendanceReport from "./page/AttendanceReport";
import SendNotification from "./page/SendNotification";
import Payslips from "./page/Payslips";
import EmployeeDetails from "./page/EmployeeDetails";
import ProfilePage from "./page/ProfilePage";
import EmployeeList from "./page/EmployeeList";

const App = () => {
  return (
    <Routes>
      {/* Routes without NavBar and Sidebar */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landing />} />

      {/* Routes with NavBar and Sidebar */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/request-leave" element={<SendLeaveRequest />} />
        <Route path="/employee/salary" element={<CalculateSalary />} />
        <Route path="/salary" element={<h1>Salary</h1>} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/employee/attendance" element={<AttendanceReport />} />
        <Route path="/employee/notification" element={<SendNotification />} />
        <Route path="/payslips" element={<Payslips />} />
        <Route path="/employee/employee-info" element={<EmployeeList />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/employee/details/:id" element={<EmployeeDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
