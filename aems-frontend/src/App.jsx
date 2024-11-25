// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import Notification from "./page/Notification";
import PrivateRoute from "./components/PrivateRoute";
import Landing from "./page/Landing";

const App = () => {
  return (
    <Routes>
      {/* Put all routes that does not need Nav bar and Side Bar Here */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landing/>}/>

      {/* Put all routes that need Nav bar and Side Bar Here */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notifications" element={<Notification />} />
      </Route>
    </Routes>
  );
};

export default App;
