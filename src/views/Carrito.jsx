// Importa el contexto (PizzaContext) en lugar de PizzaProvider
import { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import PizzaContext from '../my_context'; // Importa el contexto

const Carrito = () => {
  // Utiliza PizzaContext en lugar de PizzaProvider
  const { detailsCart, addition, reduction, total } = useContext(PizzaContext);

  return (
    <div className='p-4'>
      <div className='bg-light m-auto p-5' style={{ width: '70rem' }}>
        <h5>Detalles del pedido: </h5>
        <ListGroup variant='flush' className='bg-white'>
          {detailsCart.length > 0 ? (
            detailsCart.map((product, i) => (
              <ListGroup.Item key={i} className='d-flex justify-content-between'>
                <div className='d-flex justify-content-between'>
                  <img src={product.img} style={{ width: '4rem' }} alt='' />
                  <h6 className='p-2 text-capitalize'>{product.name}</h6>
                </div>
                <div className='d-flex justify-content-end'>
                  <h6 className='p-2 text-success'>
                    ${(product.price * product.count).toLocaleString('es-CL')}
                  </h6>
                  <Button variant='danger' onClick={() => reduction(i)}>
                    -
                  </Button>
                  <b className='mx-2'>{product.count}</b>
                  <Button
                    className='btn btn-primary'
                    onClick={() => addition(i)}
                  >
                    +
                  </Button>
                </div>
              </ListGroup.Item>
            ))
          ) : (
            <h2 className='text-center'>
              <b>Carrito Vacío</b>
            </h2>
          )}
          <h2 className='my-4'>Total: ${(total.toLocaleString('es-CL'))}</h2>
          <Button variant='success' style={{ width: '6rem' }}>
            Ir a Pagar
          </Button>
        </ListGroup>
      </div>
    </div>
  );
};

export default Carrito;
