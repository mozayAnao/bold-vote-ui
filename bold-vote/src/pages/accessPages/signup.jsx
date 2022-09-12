import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { ApiAuth } from "../../components/apiAuth";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { FormWrapper, Line } from "./style";

export const SignUpForm = () => {
  return (
    <FormWrapper>
      <p>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} /> Home
        </Link>
      </p>
      <h1>Sign Up</h1>
      <p>Secure & Transparent Elections</p>
      <ApiAuth>
        <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
      </ApiAuth>
      <div className="option">
        <Line /> <p>Or continue with Email</p>
        <Line />
      </div>
      <Input placeholder="Last Name" />
      <Input placeholder="First Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Repeat Password" />
      <div className="terms">
        <p>
          By clicking submit you agree to all{" "}
          <Link to="">Terms & Conditions</Link> and{" "}
          <Link to="">Privacy Policy</Link>
        </p>
      </div>
      <Button width="100%">Sign Up</Button>
      <p>
        Already have an account? <Link to="/access/signin">Login</Link>
      </p>
    </FormWrapper>
  );
};
