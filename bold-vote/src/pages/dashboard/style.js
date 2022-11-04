import styled from 'styled-components';

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

export const DashboardsContainer = styled.div`
  width: 100%;

  & .topwrapper {
    width: 100%;
    height: auto;
    padding: 30px 20px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
  }

  & .section {
    width: 30%;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    // box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.3);
    // -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.3);
    // -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.3);

    &:hover {
      box-shadow: 1px 1px 5px 0px rgba(77, 166, 255, 0.5);
      -webkit-box-shadow: 1px 1px 5px 0px rgba(77, 166, 255, 0.5);
      -moz-box-shadow: 1px 1px 5px 0px rgba(77, 166, 255, 0.5);
    }
  }
`;
