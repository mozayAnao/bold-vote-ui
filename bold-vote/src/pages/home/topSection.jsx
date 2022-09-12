import React from "react";
import { TopSectionWrapper } from "./style";
import Illustration from "../../images/illut-vote.svg";
import { Button } from "../../components/button";

export const TopSection = () => {
  return (
    <TopSectionWrapper>
      <div className="heroText">
        <h4>Transparent Elections</h4>
        <h1>E-Voting System</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Button>Try it out</Button>
      </div>
      <div className="illustration">
        <img src={Illustration} alt="Bold Vote" />
      </div>
    </TopSectionWrapper>
  );
};
