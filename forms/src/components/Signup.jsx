import React, { useState } from "react";
import Input from "./Input";

export default function Signup() {
  const [passwordError, setPasswordError] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const acquisitionChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel;
    console.log(data);

    if (data.password !== data["confirm-password"]) {
      setPasswordError("Password does not match.");
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <Input id="id" name="email" type="email" label="Email" required />

      <div className="control-row">
        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          required
          minLengt
        />

        <Input
          id="confirm-password"
          label="Confirm Password"
          type="password"
          name="confirm-password"
          required
          minLength={12}
          error={passwordError}
        />
      </div>

      <hr />

      <div className="control-row">
        <Input
          id="first-name"
          type="text"
          name="first-name"
          label="First Name"
          required
        />

        <Input
          id="last-name"
          type="text"
          name="last-name"
          label="Last Name"
          required
        />
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            required
          />
          I agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
