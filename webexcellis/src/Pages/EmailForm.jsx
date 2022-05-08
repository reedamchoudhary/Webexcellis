import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import * as Path from "../constants/path";
import "../css/style.css";

const EmailForm = () => {
  const { email, setEmail } = useContext(AppContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(Path.CREATE_ACCOUNT);
  };

  return (
    <div className="member-container d-flex flex-wrap">
      <div className="member-left d-lg-flex align-items-lg-center justify-content-lg-end">
        <div>
          <div className="member-form-box">
            <form>
              <h1>Enter your email</h1>
              <div className="form-box">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control "
                    id="email"
                  />
                </div>
              </div>
              <div className="member-btn" onClick={submitHandler}>
                <a className="btn btn-default btn-lg btn-block">Next</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
