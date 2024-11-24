// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import Notification from "./page/Notification";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Routes>
      {/* Put all routes that does not need Nav bar and Side Bar Here */}
      <Route path="/login" element={<Login />} />

      {/* Put all routes that need Nav bar and Side Bar Here */}
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/notifications" element={<Notification />} />
      </Route>
    </Routes>
  );
};

export default App;
