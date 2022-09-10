import styled from "styled-components";

export const AccessPageWrapper = styled.div`
  width: 100%;
  min-height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & .wrapper {
    width: 50%;
    min-height: 40vh;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px 0px rgba(13, 40, 110, 0.75);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(13, 40, 110, 0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(13, 40, 110, 0.75);

    & .formContainer {
      width: 50%;
      height: 100%;
      padding: 30px;
    }

    & .illustration {
      width: 50%;
      height: auto;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      & img {
        width: 100%;
      }
    }
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & h1 {
    font-size: 28px;
    font-weight: 600;
    color: var(--primary-color);
  }

  & .terms {
    width: 100%;

    & p {
      text-align: center;
      font-size: 11px;
    }
  }
`;
