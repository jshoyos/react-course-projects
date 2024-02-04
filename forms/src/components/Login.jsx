import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  function handleEnteredValue(identifier, event) {
    setEnteredValues((previous) => {
      return {
        ...previous,
        [identifier]: event.target.value,
      };
    });
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((previous) => {
      return {
        ...previous,
        [identifier]: true,
      };
    });
  }

  const isEmailValid = didEdit.email && !enteredValues.email.includes("@");
  const isPasswordValid =
    didEdit.password && !enteredValues.password.length < 12;

  function handleSubmission(event) {
    event.preventDefault();
    console.Log("Submitted!");
  }

  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          type="email"
          name="email"
          label="email"
          value={enteredValues.email}
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleEnteredValue("email", event)}
          error={isEmailValid && "Email is invalid"}
        />

        <Input
          id="password"
          type="password"
          name="password"
          label="password"
          value={enteredValues.password}
          error={isPasswordValid && "Password is invalid"}
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleEnteredValue("password", event)}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
