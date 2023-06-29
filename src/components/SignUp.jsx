import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./signUp.module.css";
import Template2 from "../UI/Template2";

function Signup() {
  const navigate = useNavigate();
  const [credientials, setCredientials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    isAdmin: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault(); //to prevent the page to reload
    const { name, email, password, isAdmin } = credientials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, isAdmin }),
    });
    const json = await response.json();
    if (json.success) {
      console.log("Account Created");
      // props.showAlert("Account created", "success");
      localStorage.setItem("token", json.authToken);
      if (isAdmin === "true") { //navigate to dashboard of admin if signedup as admin
        navigate("/admin/dashboard");
      } else navigate("/user/dashboard");
    } else {
      console.log("nahi bhna");
      // props.showAlert("User With this Credientials already exists", "danger");
    }
  };

  const onChange = (e) => {
    setCredientials({ ...credientials, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.page}>
      <Template2>
        <div className="container my-5" onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center">
            <h1 className="fw-bold">SignUp</h1>
          </div>
          <div className="row my-3">
            <div className="col-md-7">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Name
                  </label>
                  <input
                    type="name"
                    className={`${classes.input} `}
                    id="name"
                    name="name"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email address
                  </label>
                  <input
                    type="email"
                    className={`${classes.input} `}
                    id="email"
                    name="email"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`${classes.input} `}
                    id="password"
                    onChange={onChange}
                    name="password"
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cpassword" className="form-label fw-bold">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={`${classes.input} `}
                    id="cpassword"
                    onChange={onChange}
                    name="cpassword"
                    minLength={5}
                    required
                  />
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ width: "80%" }}
                >
                  <p className="fw-bold">Choose your role</p>
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
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio1"
                  >
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
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio2"
                  >
                    As Admin
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-5">
              <h1>Welcome to the Quiz App</h1>
              <h3>Here you can create or participate in the quizies</h3>
            </div>
          </div>
        </div>
      </Template2>
    </div>
  );
}

export default Signup;
