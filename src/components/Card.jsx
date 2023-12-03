import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaContext from '../my_context';
import { useNavigate } from 'react-router-dom';  

const CardPizza = () => {
  const { pizzas, addPizza } = useContext(PizzaContext);
  const navigate = useNavigate(); 

  return (
    <div className='row'>
      {pizzas?.map((pizza) => (
        <div key={pizza.id} className='col-3 mt-3'>
          <Card>
            <Card.Img
              style={{ height: '200px', objectFit: 'cover' }}
              variant='top'
              src={pizza.img}
              alt={pizza.name}
            />
            <Card.Body>
              <Card.Title className='text-capitalize'>{pizza.name}</Card.Title>
              <hr />

              <ListGroup variant='flush'>
                <b>Ingredientes:</b>
                {pizza.ingredients.map((ingredient, i) => (
                  <ListGroup.Item
                    style={{ border: '0' }}
                    className='text-capitalize'
                    key={i}
                  >
                    🍕
                    {ingredient}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <h2 className='text-center'>$ {pizza.price.toLocaleString('es-CL')}</h2>
              <div className='d-flex justify-content-center gap-3'>
                <Button
                  className='btn-primary'
                  onClick={() => navigate(`/pizza/${pizza.id}`)}
                >
                  Ver Más
                </Button>
                <Button
                  variant='danger'
                  onClick={() => addPizza(pizza)}
                >
                  Añadir 
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardPizza;
