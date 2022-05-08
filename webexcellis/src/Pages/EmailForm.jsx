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
    <div class="member-container d-flex flex-wrap">
      <div class="member-left d-lg-flex align-items-lg-center justify-content-lg-end">
        <div>
          <div class="member-form-box">
            <form>
              <h1>Enter your email</h1>
              <div class="form-box">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="form-control "
                    id="email"
                  />
                </div>
              </div>
              <div class="member-btn" onClick={submitHandler}>
                <a class="btn btn-default btn-lg btn-block">Next</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    // <form onSubmit={submitHandler}>
    //   <h1>Enter your email</h1>
    //   <input
    //     type="email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <button>Next</button>
    // </form>
  );
};

export default EmailForm;
