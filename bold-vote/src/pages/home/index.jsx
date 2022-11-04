import React from "react";
import { Container } from "react-bootstrap";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { HomeWrapper } from "./style";
import { TopSection } from "./topSection";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <Container>
          <Navbar />
          <TopSection />
        </Container>
      </HomeWrapper>
      <Footer />
    </>
  );
};

export default Home;
