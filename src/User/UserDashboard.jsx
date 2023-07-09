import Grades from "./Grades";
import UserNavbar from "./UserNavbar";
import Main from "./main";
import { Route, Routes } from "react-router-dom";

function UserDashboard() {
  return (
    <div className="row m-3 bg-light rounded shadow ">
      <div className="col-md-1  mt-5">
        <UserNavbar />
      </div>
      <div className="col-md-11">
        <Routes>
          <Route exact path="/" Component={Main} />
          <Route exact path="/grades" Component={Grades} />
        </Routes>
      </div>
    </div>
  );
}

export default UserDashboard;
