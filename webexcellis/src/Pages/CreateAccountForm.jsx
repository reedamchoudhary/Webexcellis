import React, { useContext, useState } from "react";
import { AppContext } from "../App";

const CreateAccountForm = () => {
  const { email } = useContext(AppContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  console.log(email, firstName, lastName, password);

  return (
    <form onSubmit={submitHandler}>
      <h1>Let's create your account</h1>
      <label>
        Email
        <input type="email" value={email} disabled />
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
