import { Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import Notification from "./page/Notification";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute element={Dashboard} />} />
        <Route
          path="/notifications"
          element={<PrivateRoute element={Notification} />}
        />
      </Routes>
    </div>
  );
};

export default App;
