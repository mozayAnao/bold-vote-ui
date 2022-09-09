import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  min-height: 92vh;
`;

export const TopSectionWrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  padding: 0 350px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & .illustration {
    width: 50%;

    & img {
      width: 80%;
    }
  }

  & .heroText {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    & h1 {
      font-size: 55px;
      font-weight: 600;
      color: var(--primary-color);
      margin: 0;
    }

    & h4 {
      font-size: 26px;
      font-weight: 500;
      color: var(--primary-color);
      margin: 0;
    }

    & p {
      font-size: 17px;
      font-weight: 500;
      color: var(--primary-color);
      text-align: right;
    }
  }
`;
