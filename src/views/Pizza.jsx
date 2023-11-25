import React, { useState, useContext, useEffect } from 'react';
import { Button, Figure, ListGroup, Modal } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import PizzaContext from '../my_context';

const Pizza = () => {
  const { addPizza } = useContext(PizzaContext);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(true);
  const [pizza, setPizza] = useState(null);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowModal(false);
    navigate('/');
  };

  const getPizzaById = async (pizzaId) => {
    const res = await fetch('../pizzas.json');
    const pizzas = await res.json();
    const foundPizza = pizzas.find((e) => e.id === pizzaId);
    return foundPizza || null;
  };

  useEffect(() => {
    const fetchPizza = async () => {
      const foundPizza = await getPizzaById(id);
      setPizza(foundPizza);
    };

    if (!pizza) {
      fetchPizza();
    }
  }, [id, pizza]);

  if (!pizza) {
    return (
      <Modal show={showModal} onHide={handleClose} centered>
        {/* ... código omitido para la modal sin pizza ... */}
      </Modal>
    );
  }

  return (
    <Modal show={showModal} onHide={handleClose} centered dialogClassName="pizza-modal">
      <Modal.Header closeButton>
        <Modal.Title>{pizza.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-row gap-3'>
          <Figure>
            <Figure.Image
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
              alt={pizza.name}
              src={pizza.img}
            />
            <Figure.Caption style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              <h4 className='card-titlepizza text-capitalize'>
                <b>{pizza.name}</b>
              </h4>
              <hr />
              <p className='text-align-center'>{pizza.desc}</p>

              <p className='card-text'>
                <b>Ingredientes:</b>
              </p>
              <ListGroup variant='flush'>
                {pizza.ingredients.map((ingredient, i) => (
                  <ListGroup.Item
                    className='border-0 text-capitalize'
                    key={i}
                  >
                    🍕
                    {ingredient}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div className='d-flex justify-content-between'>
                <h2 className='text-pizza'>
                  <b>Precio $ {pizza.price.toLocaleString('es-CL')}</b>
                </h2>
                <Button
                  variant='danger'
                  onClick={() => {
                    addPizza(pizza);
                    handleClose();
                  }}
                >
                  Añadir 🛒
                </Button>
              </div>
            </Figure.Caption>
          </Figure>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Pizza;