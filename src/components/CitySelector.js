import React, { useState } from 'react';
import { Row, Col, FormControl, Button, Container } from 'react-bootstrap';

const CitySelector = ({ onSearch }) => {
  const [city, setCity] = useState('');

  return (
    <>
    <Container>
      <Row className="m-0">        
        <Col xs={6} style={{marginTop: '2em'}}>
          <FormControl
            placeholder="Enter City Name"
            onChange={(event) => setCity(event.target.value)}
            value={city}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => onSearch(city)} className="btn-warning">Search</Button>
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default CitySelector;