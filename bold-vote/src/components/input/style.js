import styled from "styled-components";

export const InputWrapper = styled.input`
  width: 100%;
  padding: 16px 25px;
  margin: 10px 0;
  outline: none;
  // border: 1px solid var(--primary-color);
  border: none;
  border-radius: 10px;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#fff")};
  color: #20283e;
  font-size: 17px;
  font-weight: 500;

  box-shadow: 0px 0px 5px 0px rgba(13, 40, 110, 0.75);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(13, 40, 110, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(13, 40, 110, 0.75);

  &::placeholder {
    color: #20283e;
  }

  &:focus {
    outline: none;
    border: 2px solid var(--secondary-color);
  }
`;
