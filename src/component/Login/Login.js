// it is login section where you can login using google pop up
import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectUri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirectUri);
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center container-fluid mt-4 login-section">
      <Button className="w-25 bg-dark" onClick={handleGoogleLogin}>
        <i class="fab fa-google "></i>
        <span>LOGIN with GOOGLE</span>
      </Button>
    </div>
  );
};

export default Login;
