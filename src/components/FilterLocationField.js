import React, { Component } from 'react'
import { Form, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Script from 'react-load-script';
import axios from 'axios'

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

  handleScriptLoad = () => {
    // const options = { types: [] };

    /*global google*/
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'));

    autocomplete.setFields(['address_components', 'formatted_address','geometry']);
    autocomplete.addListener('place_changed', () => {

      const addressObject = autocomplete.getPlace();
      console.log('res',addressObject.geometry);

      var coors = addressObject.geometry.location;
      console.log('coors', coors)
      if (coors) {
        this.setState(
          {
            latitude: coors.lat(),
            longitude: coors.lng()
          }
        )
        console.log('gola',this.state.latitude,this.state.longitude);
        
      }
      
      // const location = addressObject.address_components[0];
      // axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      //   params: {
      //     address: location,
      //     key: ''
      //   }
      // })
      //   .then((response) => {
      //     var coors = response.data.results[0].geometry.location;
      //     console.log('coors', coors)
      //     if (coors) {
      //       this.setState(
      //         {
      //           latitude: coors.latitude,
      //           longitude: coors.longitude
      //         }
      //       )
      //     }
      //   })
      //   .catch((error) => {
      //     console.log('error', error);
      //   })
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
    })
  }

  // geolocate() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       var geolocation = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };

  //       var circle = new google.maps.Circle(
  //         { center: geolocation, radius: position.coords.accuracy });
  //       autocomplete.setBounds(circle.getBounds());
  //     });
  //   }
  // }

  render() {
    const key = process.env.REACT_APP_PLACES_KEY;
    const urlPlaces = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
    return (
      <>
        <Script
          url={urlPlaces}
          onLoad={this.handleScriptLoad}
        />
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
