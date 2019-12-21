import React, { Component } from 'react'
import { Form, InputGroup, FormControl, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class FilterLocationField extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   location: ""
    // }
    // console.log('state location',this.state.location);
    console.log('props location',this.props);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    // const { location } = this.state;
    // console.log(this.state,'state');
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.props.setLocation({ [name]: value });
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

              {/* <Form.Control
                type="text"
                placeholder="Ciudad o Barrio"
                onChange={this.handleChange}
              /> */}

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
