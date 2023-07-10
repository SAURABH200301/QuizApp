import { useEffect, useState } from "react";
import Grades from "./Grades";
import UserNavbar from "./UserNavbar";
import Main from "./main";
import Quiz from './Quiz'
import { Route, Routes } from "react-router-dom";

function UserDashboard() {
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setPageHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="row p-3 "
      style={{ backgroundColor: "#9DB2BF", height: pageHeight }}
    >
      <div className="col-md-1">
        <UserNavbar />
      </div>
      <div className="col-md-11">
        <Routes>
          <Route exact path="/" Component={Main} />
          <Route exact path="/grades" Component={Grades} />
          <Route exact path="/quiz/:id" Component={Quiz}/>
        </Routes>
      </div>
    </div>
  );
}

export default UserDashboard;
