import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db, auth } from "../../firebase.config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
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
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: name,
        });

        const { password, ...formWithoutPassword } = formData;
        const formDataCopy = {
          ...formWithoutPassword,
          timestamp: serverTimestamp(),
        };
        await setDoc(doc(db, "users", user.uid), formDataCopy);
      }

      // const formDataCopy = { passowrd, ...formData };
      // delete formDataCopy.password;
      // formDataCopy.timestamp = serverTimestamp();

      navigate("/");
    } catch (error) {
      toast.error("Something went wrong with registration");
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
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
