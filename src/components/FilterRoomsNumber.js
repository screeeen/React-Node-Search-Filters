import React, { Component } from 'react'
import { ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

class FilterRoomsNumber extends Component {

  handleChange = event => {
    const { value } = event.target;
    const integerVal = parseInt(value);
    this.props.setRoomsNumber(integerVal);
  }

  render() {
    return (
      <>
        <ButtonToolbar onChange={this.handleChange}>
          <ToggleButtonGroup type="radio" defaultValue={1} name="options">
            <ToggleButton value={100}>Todos </ToggleButton>
            <ToggleButton value={1}>1+</ToggleButton>
            <ToggleButton value={2}>2+</ToggleButton>
            <ToggleButton value={3}>3+</ToggleButton>
            <ToggleButton value={4}>4+</ToggleButton>
            <ToggleButton value={5}>5+</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </>
    )
  }
}

export default FilterRoomsNumber;




