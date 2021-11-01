import React from "react";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";
import { useLocation, useHistory } from "react-router-dom";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location?.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (

    <div className="login-from text-center mx-auto ht-login">
      <h2 className="text-center mt-5">Log In</h2>
      <button
        onClick={handleGoogleLogin}
        className="btn fw-bold mt-5 go-btn w-40 " >
        Continue with google
      </button>
    </div>
  );
};

export default Login;
