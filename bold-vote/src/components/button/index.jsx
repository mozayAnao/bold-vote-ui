import React from 'react';
import { ButtonWrapper } from './style';

export const Button = (props) => {
  const { bgcolor, onClick } = props;
  return (
    <ButtonWrapper bgcolor={bgcolor} onClick={onClick}>
      {props.children}
    </ButtonWrapper>
  );
};
