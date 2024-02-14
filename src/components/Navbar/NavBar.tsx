import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"

export const NavBar = () => {
    
    return (
      <Navbar expand="lg" className="bg_body">
        <Container className="cont_navbar">
          <Navbar.Brand href="#home">
            <img  alt="logo" src="assets/logo.png" width="30"height="30" />{' '}Soundwawe
          </Navbar.Brand>
          <Nav className="m-auto">
    <Nav.Link href="#">Inicio</Nav.Link>
    <Nav.Link href="#">Acerca de</Nav.Link>
  </Nav>
  </Container>
      </Navbar>
    );
}
