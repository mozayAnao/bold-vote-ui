import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { FormWrapper } from "./style";

export const SignInForm = () => {
  return (
    <FormWrapper>
      <p>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} /> Home
        </Link>
      </p>
      <h1>Sign In</h1>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Link to="">
        <p>Forgot Password?</p>
      </Link>
      <Button>Submit</Button>
      <p>
        Don't have an account? <Link to="/access/signup">Sign up</Link>
      </p>
    </FormWrapper>
  );
};
