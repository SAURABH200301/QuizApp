import Dashboard from "./Admin/Dashboard";
import UserDashboard from "./User/UserDashboard";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Main from "./components/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Main} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Signup} />
        <Route exact path="/admin/Dashboard" Component={Dashboard} />
        <Route excat path="/user/dashboard" Component={UserDashboard}/>
      </Routes>
    </Router>
  );
}

export default App;
