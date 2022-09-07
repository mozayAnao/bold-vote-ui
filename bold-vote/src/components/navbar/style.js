import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 100%;
  min-height: 100px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  & .menu {
    width: 100%;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    & .item {
      width: auto;
      margin-right: 50px;
      color: var(--primary-color);
      font-size: 16px;
      font-weight: 400;
    }
  }

  & .action {
    width: 100%;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    & .actors {
      width: auto;
      margin-right: 20px;
      color: var(--primary-color);
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
