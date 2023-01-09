import React, { useState } from "react";
import icon from "../../assets/Stack-icon.svg";
import "./Auth.css";
import AboutAuth from "./AboutAuth";

const Auth = () => {
  const [isSignUp, setisSignUp] = useState(false);
  // {isSignUp} is true for SignUp buttom and {!isSignUp} is false for Signin button
  const handleSwitch = () => {
    setisSignUp(!isSignUp);
  };
  return (
    <section className="auth-section">
      {isSignUp && <AboutAuth />}
      <div className="auth-container">
        <img src={icon} alt="stackoverflowIcon" className="login-logo" />

        <form>
          {isSignUp && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="name" name="name" id="name" />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" />
          </label>

          <label htmlFor="password">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>Password</h4>
              {!isSignUp && (
                <p
                  style={{
                    color: "blue",
                    fontSize: "13px",
                    paddingLeft: "20px",
                  }}
                >
                  Forget password
                </p>
              )}
            </div>
            <input type="password" name="password" id="password" />
          </label>
          {isSignUp && (
            <p style={{ fontSize: "13px" }}>
              Passwords must contain at least eight characters, <br /> including
              at least 1 letter and 1 number.
            </p>
          )}
          {isSignUp && (
            <label htmlFor="check-box">
                <div className="forinline-input">
                <input type="checkbox" id="checkbox" />
                <p style={{ fontSize: "13px" }}>
                  Opt-in to receive occasional product <br /> updates, user
                  research invitations, company <br /> announcements, and
                  digests
                </p>
            </div>
              </label>
          )}

          <button type="submit" className="auth-btn">
            {!isSignUp ? "Log in" : "Sign up"}
          </button>
          {isSignUp && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clinking "Sign up", you agree to our
              <span style={{ color: "#007ac6" }}>
                {" "}
                terms of <br /> services
              </span>
              <span style={{ color: "#007ac6" }}>
                {" "}
                privacy policy and{" "}
              </span>{" "}
              <span style={{ color: "#007ac6" }}>cookie policy</span>{" "}
            </p>
          )}
        </form>
        {/* ----------below Form------------ */}
        <div className="forinline-signup">
          {/* use Div for inline elemets */}
          <p>
            {!isSignUp
              ? "Don't have an account ?"
              : "Already have an account have an account?"}
          </p>
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignUp ? "Log in" : "Sign up"}
          </button>
        </div>
      </div>
    </section>
  );
};
export default Auth;
