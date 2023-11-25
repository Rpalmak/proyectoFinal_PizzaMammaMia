import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PizzaImage from '../assets/images/pizzabg.png';

function ContainerExample() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col style={{ position: 'relative' }}>
            <div style={textContainerStyles}>
              <h2 style={titleStyles}>Pizza Mamma Mia!</h2>
              <p style={subtitleStyles}>Tenemos las mejores pizzas...</p>
            </div>
            <img
              src={PizzaImage}
              alt="PizzaBG"
              style={imageStyles}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const textContainerStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  textAlign: 'center',
  zIndex: 1,
};

const titleStyles = {
  fontSize: '2rem',
  fontWeight: 'bold',
};

const subtitleStyles = {
  fontSize: '1rem',
};

const imageStyles = {
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  objectPosition: 'top',
  filter: 'brightness(50%)',
};

export default ContainerExample;
