import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", hasMinLength);

  function handleSubmission(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) return;

    console.log("submitted");
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
          value={emailValue}
          onBlur={handleEmailBlur}
          onChange={(event) => handleEmailChange(event)}
          error={emailHasError && "Email is invalid"}
        />

        <Input
          id="password"
          type="password"
          name="password"
          label="password"
          value={passwordValue}
          error={passwordHasError && "Password is invalid"}
          onBlur={handlePasswordChange}
          onChange={(event) => handlePasswordBlur(event)}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
