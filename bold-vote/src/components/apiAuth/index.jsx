import { PropaneSharp } from "@mui/icons-material";
import React from "react";
import { Button } from "../button";

export const ApiAuth = (props) => {
  return (
    <Button width="100%" bgcolor="#fff" color="var(--info-text-color)">
      {props.children}
    </Button>
  );
};
