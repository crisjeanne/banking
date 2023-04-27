import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import "./Navbar.css"
function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container id="container">
          <Navbar.Brand className="logo">
            <img src="../../public/vite.svg" width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >
              <Link className="links" to={"/"} >
              Home
              </Link>
            </Nav.Link>
            <Nav.Link >
            <Link className="links" to={"/login"} >
              Login
              </Link>
            </Nav.Link>
            <Nav.Link >
              <Link className="links" to={"/dashboard"} >
              Dashboard
              </Link>
            </Nav.Link>
            <Nav.Link >
              <Link className="links" to={"/register"} >
              Register
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
}

export default Navigation;