import React from "react";
import { ButtonWrapper } from "./style";

export const Button = (props) => {
  const { bgcolor, onClick, width, color } = props;
  return (
    <ButtonWrapper
      bgcolor={bgcolor}
      onClick={onClick}
      width={width}
      color={color}
    >
      {props.children}
    </ButtonWrapper>
  );
};
