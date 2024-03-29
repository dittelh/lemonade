import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/img/logo.png';
import './Header.css';
import { CartContext } from '../../App';
import { useContext, useEffect, useState } from 'react';
import { useAuth } from '../Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const cart = useContext(CartContext);
  const auth = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    navigate('/login');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top navbar-custom">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <Image className="logo" src={Logo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="">
          <Nav
            className="me-auto nav-links my-lg-0"
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
          {auth.user === null ? (
            <Link to="/login">
              <Button variant="outline-success" className="header-btn mx-3">
                Log ind
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/dashboard">
                <Button variant="outline-success" className='header-btn dashBtn'>Dashboard</Button>
              </Link>

              <Button
                variant="outline-success"
                className="mx-3 logout header-btn"
                onClick={logout}
              >
                Log ud
              </Button>
            </>
          )}

          <Link to="/kurv">
            <Button variant="outline-success" className='header-btn'>
              Kurv
              <Badge className="badge" bg="success">
                {cart.cartItems.length}
              </Badge>
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
