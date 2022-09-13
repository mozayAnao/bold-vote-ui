import React from "react";
import { DashboardWrapper } from "./style";
import SideNav, {
  Toogle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faHome } from "@fortawesome/free-solid-svg-icons";
import { BrandLogo } from "../../components/brandLogo";
// import { SideBar } from "../../components/sideBar/index.jsx";

export const Dashboard = () => {
  return (
    <DashboardWrapper>
      <SideNav
        onSelect={(selected) => {
          console.log(selected);
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <FontAwesomeIcon icon={faHome} />
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <FontAwesomeIcon icon={faChartBar} />
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Charts</NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Bar Chart</NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      <main className="main">Home</main>
      {/* <SideBar /> */}
    </DashboardWrapper>
  );
};
