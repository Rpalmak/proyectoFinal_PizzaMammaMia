import React, { useContext } from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import PizzaContext from '../my_context';
import PropTypes from 'prop-types';


const CartItem = ({ product, i, addition, reduction }) => (
  <ListGroup.Item key={i} className="d-flex justify-content-between">
    <div className="d-flex justify-content-between align-items-center">
      <img src={product.img} style={{ width: '4rem' }} alt="" />
      <div className="ml-2">
        <h6 className="p-2 text-capitalize">{product.name}</h6>
        <small className="text-muted">{product.description}</small>
      </div>
    </div>
    <div className="d-flex justify-content-end">
      <h6 className="p-2 text-success">
        {(product.price * product.count).toLocaleString('es-CL')}
      </h6>
      <div className="d-flex justify-content-between align-items-center">
        <Button
          variant="danger"
          size="sm"
          className="mx-2"
          onClick={() => reduction(i)}
        >
          -
        </Button>
        <b className="mx-2">{product.count}</b>
        <Button
          variant="primary"
          size="sm"
          className="mx-2"
          onClick={() => addition(i)}
        >
          +
        </Button>
      </div>
    </div>
  </ListGroup.Item>
);

const Cart = () => {
  const { detailsCart, addition, reduction, total } = useContext(PizzaContext);

  return (
    <div className="container">
      <h3 className="text-center my-4">Carrito de Pizzas</h3>
      <div className="bg-light p-4">
        {detailsCart.length > 0 ? (
          <ListGroup variant="flush">
            {detailsCart.map((product, i) => (
              <CartItem
                key={i}
                product={product}
                i={i}
                addition={addition}
                reduction={reduction}
              />
            ))}
            <h2 className="mt-4 text-center">
              Total: ${(total.toLocaleString('es-CL'))}
            </h2>
            <Button variant="success" className="mx-auto">
              Ir a Pagar
            </Button>
          </ListGroup>
        ) : (
          <div className="text-center">
            <h2>Carrito Vacío</h2>
            <p>¡Agrega tus pizzas favoritas para comenzar tu pedido!</p>
          </div>
        )}
      </div>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  i: PropTypes.number.isRequired,
  addition: PropTypes.func.isRequired,
  reduction: PropTypes.func.isRequired,
};

export default Cart;



