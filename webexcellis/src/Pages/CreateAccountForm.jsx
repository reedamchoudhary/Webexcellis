import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../App";
import { signUpUser, updateUser } from "../async/user.async";

const CreateAccountForm = () => {
  const { email, setEmail, dataList } = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let currentData = dataList?.filter((item) => item.id === id)[0];
    if (id) {
      setEmail(currentData?.email);
      setFirstName(currentData?.firstName);
      setLastName(currentData?.lastName);
    }
  }, [id]);

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
    <div className="member-container d-flex flex-wrap">
      <div className="member-left d-lg-flex align-items-lg-center justify-content-lg-end">
        <div>
          <div className="member-form-box">
            <form>
              <h1>Let's create your account</h1>
              <div className="form-box">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control "
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstname">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lastname">Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-intro-box d-flex align-items-center">
                    <label htmlFor="password">Password</label>
                    <a
                      tabIndex="0"
                      className="help-popover ml-2"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-content="Lorem ipsum dolor sit amet, consectetur adipiscing"
                    >
                      <img src="include/images/help-circle.svg" alt="" />
                    </a>
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      name="your_pass"
                      id="password-field"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span>
                      <i className="toggle-password" toggle="#password-field">
                        <span className="show">
                          <img src="include/images/eye.svg" alt="" />
                        </span>
                        <span className="hide">
                          <img src="include/images/eye-off.svg" alt="" />
                        </span>
                      </i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="member-btn" onClick={submitHandler}>
                <a href="#!" className="btn btn-default btn-lg btn-block">
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
