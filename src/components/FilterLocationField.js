import React, { Component } from 'react'
import { Form, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Script from 'react-load-script';


class FilterLocationField extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      query: '',
    }
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ location: value })
    this.props.setLocation(value);
  };

  handleScriptLoad = () => {
    const options = { types: ['(cities)'] };

    /*global google*/
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options);

    console.log('autoco', document.getElementById('autocomplete'));

    autocomplete.setFields(['address_components', 'formatted_address']);
    console.log('autt', autocomplete);

    // Fire Event when a suggested name is selected
    autocomplete.addListener('place_changed', () => {
      console.log('auttttttt', autocomplete);

      const addressObject = autocomplete.getPlace();
      const address = addressObject.address_components;
      console.log('address', addressObject, address);
      if (address) {
        this.setState(
          {
            location: address[0].long_name,
            query: addressObject.formatted_address,
          }
        );
      }
    });

  }

  handlePlaceSelect = () => {

  }

  render() {

    return (
      <>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOCkiowTfg9deedNg34EWelp3thqbYYN8&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <Form inline onSubmit={this.handleFormSubmit}>
          <InputGroup>
            <FormControl
              id="autocomplete"
              placeholder="Ciudad o Barrio"
              aria-label="location"
              aria-describedby="basic-addon1"
              value={this.state.location}
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
