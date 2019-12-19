import React, { Component } from 'react'
import { Form, Col, Row } from 'react-bootstrap'

class SizeInput extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <Row>
              <h6>TAMAÑO</h6>
            </Row>
            <Row>
              <Col>
                <Form.Group as={Col} controlId="min-size" >
                  <Form.Control as="select">
                    <option>Tamaño Mínimo</option>
                    <option>5m²</option>
                    <option>20m²</option>
                    <option>50m²</option>
                    <option>150m²</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <p> - </p>
              <Col>
                <Form.Group as={Col} controlId="max-size" >
                  <Form.Control as="select">
                    <option>Tamaño Máximo</option>
                    <option>5m²</option>
                    <option>20m²</option>
                    <option>50m²</option>
                    <option>150m²</option>
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

export default SizeInput;
