import { useEffect, useState } from "react";

const Profile = () => {
  const [username, setUsername] = useState("username");
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
      setUsername(user);
    }
    fetchUsername();
  }, []);
  return (
    <div>
      username: <b>{username}</b>
    </div>
  );
};

export default Profile;
