import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrorRightIcon } from "../../assets/svg/keyboardArrowRightIcon.svg";
import visiblityIcon from "../../assets/svg/visibilityIcon.svg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) =>({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back</p>
        </header>
        <main>
          <form>
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={name}
              onChange={onChange}
              className="nameInput"
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
              className="emailInput"
            />
            <div className="passwordInputDiv">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="passwordInput"
                id="password"
                value={password}
                onChange={onChange}
              />

              <img
                src={visiblityIcon}
                alt="show password"
                className="showPassword"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>

            <Link to={"/forgot-password"} className="forgotPasswordLink">
              Forgot Password
            </Link>

            <div className="signInBar">
              <p className="signInText">Sign Up</p>
              <button className="signInButton">
                <ArrorRightIcon fill="#ffffff" width={"34px"} />
              </button>
            </div>
          </form>

          {/* Google OAuth Component */}

          <Link to={"/sign-in"} className="registerLink">
            Sign In Instead
          </Link>
        </main>
      </div>
    </>
  );
};

export default SignUp;

