import { Container, Nav, Navbar } from "react-bootstrap";
import './Navs.css';
import logo from './../../img/logo.png';

const NavBar = () => {
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} title="logo" className="logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#explore">Explore Food</Nav.Link>
            <Nav.Link href="#review">Reviews</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id="last">23-314184</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
