import { Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import Notification from "./page/Notification";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      {/* Routes without Layout */}
      <Route path="/login" element={<Login />} />

      {/* Routes with Layout */}
      <Route
        element={<Layout />}
      >
        <Route path="/home" element={<PrivateRoute element={Dashboard} />} />
        <Route path="/notifications" element={<Notification />} />
      </Route>
    </Routes>
  );
};

export default App;
