import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import * as Path from "../constants/path";

const EmailForm = () => {
  const { email, setEmail } = useContext(AppContext);
  const navigate = useNavigate();

  console.log(email);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(Path.CREATE_ACCOUNT);
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Enter your email</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Next</button>
    </form>
  );
};

export default EmailForm;
