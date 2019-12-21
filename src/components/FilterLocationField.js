import React, { Component } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class FilterLocationField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { location } = this.state;
    console.log(this.state,'state ya');

  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
    
  };

  render() {
    const { location } = this.state;

    return (
      <>
        <Form inline onSubmit={this.handleFormSubmit}>
          <InputGroup>
            {/* <FormControl
              placeholder="Ciudad o Barrio"
              aria-label="location"
              aria-describedby="basic-addon1"
              value={location}
              onChange={this.handleChange}
            /> */}

              <Form.Control
                type="text"
                placeholder="Ciudad o Barrio"
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
