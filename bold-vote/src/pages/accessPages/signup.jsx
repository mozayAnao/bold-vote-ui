import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { FormWrapper } from "./style";

export const SignUpForm = () => {
  return (
    <FormWrapper>
      <p>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} /> Home
        </Link>
      </p>
      <h1>Sign Up</h1>
      <Input placeholder="Last Name" />
      <Input placeholder="First Name" />
      <Input type="email" placeholder="Email" />
      <Input placeholder="Password" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Repeat Password" />
      <div className="terms">
        <p>
          By clicking submit you agree to all{" "}
          <Link to="">Terms & Conditions</Link> and{" "}
          <Link to="">Privacy Policy</Link>
        </p>
      </div>
      <Button>Submit</Button>
      <p>
        Already have an account? <Link to="/access/signin">Sign in</Link>
      </p>
    </FormWrapper>
  );
};
