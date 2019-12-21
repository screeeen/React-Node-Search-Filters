import React, { Component } from 'react'
import { Form, Col, Row } from 'react-bootstrap'

export default class PriceInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceMax: 100000,
      priceMin: 0
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { priceMax, priceMin } = this.state;
    console.log(this.state, 'state ya');

  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);

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
                  <Form.Control as="select">
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
                <Form.Group as={Col} controlId="max-price" onSubmit={this.handleFormSubmit}>
                  <Form.Control as="select" onChange={this.handleChange}>
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

