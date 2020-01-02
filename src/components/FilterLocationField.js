import React, { Component } from 'react'
import { Form, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class FilterLocationField extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      query: '',
      latitude: 0,
      longitude: 0
    }
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ location: value })
  };

  liftLocationState = () => {
    this.props.setLocation(this.state.location,this.state.latitude,this.state.longitude);
  }


  render() {
 return (
      <>
        <Form onSubmit={this.handleFormSubmit}>
          <InputGroup size="sm">
            <FormControl
              id="autocomplete"
              placeholder="Ciudad o Barrio"
              aria-label="location"
              aria-describedby="basic-addon1"
              value={this.state.location}
              onChange={this.handleChange}
            />
            <InputGroup.Append>
              <InputGroup.Text>
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
