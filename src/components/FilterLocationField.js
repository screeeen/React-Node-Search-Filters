import React, { Component } from 'react'
import { Form, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class FilterLocationField extends Component {


  handleChange = event => {
    const { value } = event.target;
    this.props.setLocation(value);
  };

  render() {
    const { location } = this.props.location;

    return (
      <>
        <Form inline onSubmit={this.handleFormSubmit}>
          <InputGroup>
            <FormControl
              placeholder="Ciudad o Barrio"
              aria-label="location"
              aria-describedby="basic-addon1"
              value={location}
              onChange={this.handleChange}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </>
    )
  }
}

export default FilterLocationField;
