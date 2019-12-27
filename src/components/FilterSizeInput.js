import React, { Component } from 'react'
import { Form, Col, Row } from 'react-bootstrap'

class FilterSizeInput extends Component {

  handleChange = event => {
    const { name, value } = event.target;
    const integerVal = parseInt(value);
    name ==='sizeMin' ? this.props.setSizeMin(integerVal) : this.props.setSizeMax(integerVal);
  };


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
                <Form.Group as={Col} controlId="min-size" onChange={this.handleChange}>
                  <Form.Control as="select" name="sizeMin">
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
                <Form.Group as={Col} controlId="max-size" onChange={this.handleChange}>
                  <Form.Control as="select" name="sizeMax">
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

export default FilterSizeInput;
