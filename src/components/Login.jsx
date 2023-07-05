import user from "../assets/user.png";
import classes from "./Login.module.css";
import Template2 from "../UI/Template2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credientials, setCredientials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); //to prevent the page to reload
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credientials.email,
          password: credientials.password,
          isAdmin: credientials.isAdmin,
        }),
      });
      const json = await response.json();
      //CREATING FETCH USER
      const resFetchUser = await fetch("http://localhost:5000/api/auth/getuser",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": json.authtoken,
          },
          body: JSON.stringify({
            id: json.authtoken,
          }),
        }
      );
      const fetchUserJson = await resFetchUser.json();
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        if (
          credientials.isAdmin === "true" &&
          credientials.isAdmin === fetchUserJson.isAdmin
        ) {
          navigate("/admin/dashboard");
        } else if (
          credientials.isAdmin === "false" &&
          credientials.isAdmin === fetchUserJson.isAdmin
        ) {
          navigate("/user/dashboard");
        } else {
          alert("Invalid Credientials");
          localStorage.removeItem("token");
          navigate("/");
        }
        // props.showAlert("Login Successfully", "success");
      } else {
        alert("Invalid Credientials");
        // props.showAlert("Invalid Credientials", "danger");
      }
    } catch (error) {
      alert(error)
    }
  };

  const onChange = (e) => {
    setCredientials({ ...credientials, [e.target.name]: e.target.value });
  };

  return (
    <div className={`d-flex justify-content-center mt-5 ${classes.main}`}>
      <Template2>
        <div className="" style={{ width: "40vw" }}>
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2>Log in</h2>
              <p>Welcome Back!</p>
            </div>
          </div>
          <div className="card-body d-flex flex-column align-items-center ">
            <div className="p-5">
              <img className={classes.user} src={user} alt="user" />
            </div>
            <form className={`text-center  ${classes.form} `}method="post" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className={`${classes.input}`}
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <input
                  className={`${classes.input}`}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={onChange}
                />
              </div>
              <div
                className="btn-group d-block my-4"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="isAdmin"
                  id="btnradio1"
                  autoComplete="off"
                  value="false"
                  onChange={onChange}
                />
                <label className={`btn ${classes.btnn}`} htmlFor="btnradio1">
                  As User
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="isAdmin"
                  id="btnradio2"
                  autoComplete="off"
                  value="true"
                  onChange={onChange}
                />
                <label className={`btn ${classes.btnn}`} htmlFor="btnradio2">
                  As Admin
                </label>
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <button className={`btn ${classes.btnn}`} type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </Template2>
    </div>
  );
}

export default Login;
