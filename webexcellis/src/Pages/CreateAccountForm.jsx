import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../App";
import { signUpUser, updateUser } from "../async/user.async";

const CreateAccountForm = () => {
  const { email, setEmail } = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let body = {
      firstName,
      lastName,
      password,
      email,
    };
    id ? updateUser(body, id, navigate) : signUpUser(body, navigate);
  };

  return (
    <div class="member-container d-flex flex-wrap">
      <div class="member-left d-lg-flex align-items-lg-center justify-content-lg-end">
        <div>
          <div class="member-form-box">
            <form>
              <h1>Let's create your account</h1>
              <div class="form-box">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control "
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="firstname">First name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="lastname">Last name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-intro-box d-flex align-items-center">
                    <label for="password">Password</label>
                    <a
                      tabindex="0"
                      class="help-popover ml-2"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-content="Lorem ipsum dolor sit amet, consectetur adipiscing"
                    >
                      <img src="include/images/help-circle.svg" alt="" />
                    </a>
                  </div>
                  <div class="input-group">
                    <input
                      type="password"
                      name="your_pass"
                      id="password-field"
                      class="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span>
                      <i class="toggle-password" toggle="#password-field">
                        <span class="show">
                          <img src="include/images/eye.svg" alt="" />
                        </span>
                        <span class="hide">
                          <img src="include/images/eye-off.svg" alt="" />
                        </span>
                      </i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="member-btn" onClick={submitHandler}>
                <a href="#!" class="btn btn-default btn-lg btn-block">
                  Next
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountForm;
