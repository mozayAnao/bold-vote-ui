import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Navbar } from "../../components/navbar";
import { HomeWrapper } from "./style";
import { TopSection } from "./topSection";

const Home = () => {
  return (
    <HomeWrapper>
      <Container>
        <Navbar />
        <TopSection />
      </Container>
    </HomeWrapper>
  );
};

export default Home;
