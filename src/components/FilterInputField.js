import React, { Component } from 'react'
import { Form, InputGroup, FormControl, Button, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class FilterInputField extends Component {
  render() {
    return (
      <div>
        <Form inline>
          <InputGroup>
            <FormControl
              placeholder="Ciudad o Barrio"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <Form inline>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default FilterInputField;
