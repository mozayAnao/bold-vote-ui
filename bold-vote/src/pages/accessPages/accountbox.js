import React, { useState } from "react";
import { AccountContext } from "./context";
import { SignInForm } from "./signin";
import { AccessPageWrapper } from "./style";
import Illustration from "../../images/signin.svg";
import { SignUpForm } from "./signup";
import { BrandLogo } from "../../components/brandLogo";

export const AccountBox = (props) => {
  const { initialActive } = props;
  const [active, setActive] = useState(
    initialActive ? initialActive : "signin"
  );

  const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
  };

  const switchToSignup = () => {
    switchActive("signup");
  };

  const switchToSignin = () => {
    switchActive("signin");
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,
  };

  return (
    <AccountContext.Provider value={contextValue}>
      <AccessPageWrapper>
        <div className="wrapper">
          <div className="formContainer">
            {active === "signin" && <SignInForm />}
            {active === "signup" && <SignUpForm />}
          </div>

          <div className="illustration">
            <BrandLogo color="#fff" />
            <img src={Illustration} alt="Access page" />
          </div>
        </div>
      </AccessPageWrapper>
    </AccountContext.Provider>
  );
};
