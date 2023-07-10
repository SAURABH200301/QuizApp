import { useEffect, useState } from "react";
import ReactStoreIndicator from "react-score-indicator";
import Template1 from "../UI/Template1";
import classes from './Profile.module.css'

const Profile = () => {
  const [username, setUsername] = useState("username");
  const [email, setEmail] = useState("");
  useEffect(() => {
    async function fetchUsername() {
      const res = await fetch("http://localhost:5000/api/auth/getuser", {
        method: "POST",
        headers: {
          "auth-token": localStorage.getItem("token").toString(),
        },
      });
      const data = await res.json();
      const user = data.name;
      const emails = data.email;
      setEmail(emails);
      setUsername(user);
    }
    fetchUsername();
  }, []);
  const colors = ["#DDE6ED", "#9DB2BF", "#526D82", "#526E72", "#27374D"];
  return (
    <div className="py-3">
      <Template1>
        <h2 className={classes.heading}>Profile</h2>
        <div className={classes.text}>
          username: <b>{username}</b>
        </div>
        <div className={classes.text}>
          Registerted email Id: <b>{email}</b>
        </div>

        <div className=" mt-4 d-flex flex-column align-items-center">
          <div className="m-3">Your Overall Score</div>
          <ReactStoreIndicator
            stepsColors={colors}
            lineGap={15}
            value={50}
            maxValue={100}
          />
        </div>
      </Template1>
    </div>
  );
};

export default Profile;
