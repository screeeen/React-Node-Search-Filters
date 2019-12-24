import React, { Component } from 'react'
import { Form, Col, Row } from 'react-bootstrap'

export default class PriceInput extends Component {
  
  handleChange = event => {
    const { name, value } = event.target;
    console.log('hola?', { name, value });
    this.props.setPrice({ [name]: value });
  };

  render() {
    return (
      <>
        <Row>
          <Col>
            <Row>
              <h6>PRECIO</h6>
            </Row>
            <Row>
              <Col>
                <Form.Group as={Col} controlId="min-price" onChange={this.handleChange}>
                  <Form.Control as="select" name ="priceMin">
                    <option>precio mínimo</option>
                    <option>25.000€</option>
                    <option>50.000€</option>
                    <option>75.000€</option>
                    <option>100.000€</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <p> - </p>
              <Col>
                <Form.Group as={Col} controlId="max-price" onChange={this.handleChange}>
                  <Form.Control as="select" name ="priceMax">
                    <option>precio máximo</option>
                    <option>25.000€</option>
                    <option>50.000€</option>
                    <option>75.000€</option>
                    <option>100.000€</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    )
  }
}

