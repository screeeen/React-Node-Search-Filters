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
      latitude: 0,
      longitude: 0
    }
  }

  handleChange = event => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ location: value }, () => this.liftLocationState())
  };

  liftLocationState = () => {
    this.props.setLocation(this.state.location, this.state.latitude, this.state.longitude);
  }

  handleScriptLoad = () => {
    // const options = { types: [] };

    /*global google*/
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'));

    autocomplete.setFields(['address_components', 'formatted_address', 'geometry']);
    autocomplete.addListener('place_changed', () => {

      const addressObject = autocomplete.getPlace();
      var coors = addressObject.geometry.location;
      if (coors) {
        this.setState(
          {
            latitude: coors.lat(),
            longitude: coors.lng()
          }
        )
        console.log('coords for map', this.state.latitude, this.state.longitude);
      }
      const address = addressObject.address_components;
      if (address) {
        this.setState(
          {
            location: address[0].long_name,
            query: addressObject.formatted_address,
          }
        );
      }
      this.liftLocationState();
      this.props.onSubmit();
    })
  }

  handleKeyPress(target) {
    if (target.charCode === 13) {
      target.preventDefault();
    }
  }


  render() {
    const key = process.env.REACT_APP_PLACES_KEY;
    const urlPlaces = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
    return (
      <>
        <Script
          url={urlPlaces}
          onLoad={this.handleScriptLoad}
        />
        <Form
          onKeyPress={this.handleKeyPress}>
          <InputGroup size="sm">
            <FormControl
              onSubmit={this.props.onSubmit}
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
