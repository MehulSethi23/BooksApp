import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row
        className="align-items-center justify-content-xl-between "
        style={{
          marginTop: "6%",
          borderTop: "1px groove black",
          paddingTop: "1.7%",
        }}
      >
        <Col xl="7">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink href="" rel="noopener noreferrer">
                Mehul Sethi
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="" rel="noopener noreferrer">
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="" rel="noopener noreferrer">
                Blog
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="" rel="noopener noreferrer">
                License
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
