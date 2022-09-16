import styled from "styled-components";

export const DashboardWrapper = styled.div`
  width: 100%;
  min-height: 91.5vh;

  & .sidebar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 260px;
    z-index: 1;
    box-shadow: rgb(5 159 169 / 20%) 0px 4px 4px;
    padding: 10px;
    margin-top: 20px;

    & .nav-link {
      text-decoration: none;
      padding: 20px;
      color: var(--info-text-color);
      display: flex;
      justify-content: flex-start;
      align-items: center;

      & .icon {
        width: 20%;
      }

      & .item {
        width: 70%;
      }
    }

    & .menu {
      width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      & .menu-item {
        width: 100%;
        min-height: 20px;
        padding: 20px;
        margin-bottom: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: var(--secondary-color);
        border-radius: 5px;

        &:hover {
          background: var(--secondary-color);
          cursor: pointer;
          color: #fff;
        }

        & .icon {
          width: 20%;
        }

        & .item {
          width: 70%;
        }
      }
    }
  }

  & .main {
    position: relative;
    float: right;
    width: calc(100% - 260px);
    min-height: 100vh;
    // background: #eeeeee;
    padding: 20px;
  }

  & .main-expanded {
    margin-left: 240px;
  }
`;
