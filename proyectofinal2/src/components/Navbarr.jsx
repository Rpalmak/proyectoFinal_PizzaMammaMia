import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaIcon from '../assets/images/pizza-svgrepo-com.svg';
import CartIcon from '../assets/images/shopping-cart-svgrepo-com.svg';
import PizzaContext from '../my_context';
import { Link } from 'react-router-dom';
import TopContainer from './TopContainer'

function CustomNavbar() {
  const { detailsCart, total } = useContext(PizzaContext);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <img
              src={PizzaIcon}
              width="30"
              height="30"
              className="d-inline-block align-top me-1"
              alt="Pizza Icon"
            />
            Pizzería Mamma Mia!
          </Navbar.Brand>

          <Nav className="ml-auto">
          <Link to="/carrito" className='d-flex flex-row align-items-center' style={{ cursor: 'pointer' }}>
              <img
                src={CartIcon}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="Cart Icon"
              />
              <p className="mb-0 ml-2">Carrito: {detailsCart.length}</p>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <TopContainer/>
    </>
  );
}

export default CustomNavbar;
