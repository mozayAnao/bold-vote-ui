import React from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Navbar } from "../../components/navbar";
import { HomeWrapper } from "./style";
import { TopSection } from "./topSection";

const Home = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <TopSection />
    </HomeWrapper>
  );
};

export default Home;
