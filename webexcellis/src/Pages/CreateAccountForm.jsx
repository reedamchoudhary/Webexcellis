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
    <form onSubmit={submitHandler}>
      <h1>Let's create your account</h1>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        First Name
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button>Next</button>
    </form>
  );
};

export default CreateAccountForm;
