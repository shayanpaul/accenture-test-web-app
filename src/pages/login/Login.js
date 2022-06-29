import React, { useEffect, useState } from "react";
import classes from "./login.module.css";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user === "" || pwd === "") {
        setErrMsg("Please enter user name and password");
        return false;
      } else {
        setUser("");
        setPwd("");
        setAuth({ user, pwd });
        navigate(from, { replace: true });
      }
    } catch (err) {}
  };
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card shadow">
            <div className="card-title text-center border-bottom">
              <h2 className="p-3">Login</h2>
            </div>
            <div className="card-body">
              {errMsg && <p className={classes.errMsg}>{errMsg}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">
                    Username/Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
