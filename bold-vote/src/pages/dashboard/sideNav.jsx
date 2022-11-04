import {
  faBoxArchive,
  faDashboard,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";

export const SideNav = () => {
  return (
    <Nav defaultActiveKey={1} className="flex-column" variant="tabs">
      <Nav.Item>
        <Nav.Link eventKey={1} href="">
          <div className="icon">
            <FontAwesomeIcon icon={faDashboard} />
          </div>
          <div className="item">Dashboard</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={2} href="">
          <div className="icon">
            <FontAwesomeIcon icon={faBoxArchive} />
          </div>
          <div className="item">Election Profile</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={3} href="">
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="item">Aspirants</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={4} href="">
          <div className="icon">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className="item">Voters</div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
