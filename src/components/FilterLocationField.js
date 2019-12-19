import React, { Component } from 'react'
import { Form, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class FilterLocationField extends Component {
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
      </div>
    )
  }
}

export default FilterLocationField;
