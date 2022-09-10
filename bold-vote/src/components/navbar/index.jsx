import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { NavWrapper } from "./style";

export const Navbar = () => {
  return (
    <Container>
      <NavWrapper>
        <BrandLogo />
        <div className="menu">
          <div className="item">
            <Link to="/">Product</Link>
          </div>
          <div className="item">
            <Link to="/">Pricing</Link>
          </div>
          <div className="item">
            <Link to="/">About</Link>
          </div>
          <div className="item">
            <Link to="/">Demo</Link>
          </div>
        </div>
        <div className="action">
          <div className="actors">
            <Link to="/access/signin">Sign In</Link>
          </div>
          <Button onClick={() => (window.location.href = "/access/signup")}>
            Sign Up
          </Button>
        </div>
      </NavWrapper>
    </Container>
  );
};
