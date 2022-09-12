import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { ApiAuth } from "../../components/apiAuth";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { FormWrapper, Line } from "./style";

export const SignInForm = () => {
  return (
    <FormWrapper>
      <p>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} /> Home
        </Link>
      </p>
      <h1>Sign In</h1>
      <p>Secure & Transparent Elections</p>
      <ApiAuth>
        <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
      </ApiAuth>
      <div className="option">
        <Line /> <p>Or continue with Email</p>
        <Line />
      </div>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />

      <p>
        Forgot Password? <Link to="">Reset</Link>
      </p>
      <Button
        width="100%"
        onClick={() => (window.location.href = "/dashboard/admin")}
      >
        Sign in
      </Button>
      <p>
        Don't have an account? <Link to="/access/signup">Sign up</Link>
      </p>
    </FormWrapper>
  );
};
