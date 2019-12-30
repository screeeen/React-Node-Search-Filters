import React, { Component } from 'react'
import { Row, Col, ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'


class FilterRoomsNumber extends Component {

  handleChange = event => {
    const { value } = event.target;
    const integerVal = parseInt(value);
    this.props.setRoomsNumber(integerVal);
  }

  render() {
    return (
      <Row>
        <Col>
          <Row>
            <h6 className="m-auto">HABITACIONES</h6>
          </Row>
          <Row>
            <Col>
              <ButtonToolbar onChange={this.handleChange}>
                <ToggleButtonGroup className="m-auto p-4" type="radio" defaultValue={0} name="options">
                  <ToggleButton value={0}>Todos</ToggleButton>
                  <ToggleButton value={1}>1+</ToggleButton>
                  <ToggleButton value={2}>2+</ToggleButton>
                  <ToggleButton value={3}>3+</ToggleButton>
                  <ToggleButton value={4}>4+</ToggleButton>
                  <ToggleButton value={5}>5+</ToggleButton>
                </ToggleButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default FilterRoomsNumber;




