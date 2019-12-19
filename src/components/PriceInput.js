import React, { Component } from 'react'
import { Form, Col, Row } from 'react-bootstrap'

export default class PriceInput extends Component {
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
                <Form.Group as={Col} controlId="min-price" >
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
                <Form.Group as={Col} controlId="max-price" >
                  <Form.Control as="select">
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

