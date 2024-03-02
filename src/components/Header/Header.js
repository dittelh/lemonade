import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/img/logo.png';
import './Header.css';
import { CartContext } from '../../App';
import { useContext } from 'react';

const Header = () => {
  const cart = useContext(CartContext);
  console.log(cart)

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top navbar-custom">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <Image className='logo' src={Logo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Shoppen
            </Nav.Link>
            <Nav.Link as={Link} to="/opskrifter">
              Opskrifter
            </Nav.Link>
            <Nav.Link as={Link} to="/omos">
              Om os
            </Nav.Link>
          </Nav>
          <Form className="d-flex mx-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Link to="/kurv">
            <Button variant="outline-success">
              Kurv
              <Badge className='badge' bg="success">{cart.cartItems.length}</Badge>
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
