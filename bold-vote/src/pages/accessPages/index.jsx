import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { AccountBox } from "./accountbox";

export const AccessPage = (props) => {
  const { action } = useParams();
  const location = useLocation();

  return <AccountBox initialActive={action} key={location.key} />;
};
