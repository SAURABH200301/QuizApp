import UserNavbar from "./UserNavbar";
import Main from "./main";

function UserDashboard() {
  return (
    <div className="row m-3 bg-light rounded shadow">
      <div className="col-md-2  mt-5">
        <UserNavbar />
      </div>
      <div className="col-md-10">
        <Main />
      </div>
    </div>
  );
}

export default  UserDashboard;
