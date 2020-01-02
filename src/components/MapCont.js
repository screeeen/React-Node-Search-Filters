import React, { Component } from 'react'
import Script from 'react-load-script';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      query: '',
      latitude: 0,
      longitude: 0
    }
  }
  
  
  handleScriptLoad = () => {
    // const options = { types: [] };
    
    /*global google*/
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'));
      
      autocomplete.setFields(['address_components', 'formatted_address', 'geometry']);
      autocomplete.addListener('place_changed', () => {
        
        const addressObject = autocomplete.getPlace();
        console.log('res', addressObject.geometry);
        
        var coors = addressObject.geometry.location;
        console.log('coors', coors)
        if (coors) {
          this.setState(
            {
            latitude: coors.lat(),
            longitude: coors.lng()
          }
          )
          console.log('gola', this.state.latitude, this.state.longitude);
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
        })
      }
      
      liftLocationState = () => {
        this.props.setLocation(this.state.location, this.state.latitude, this.state.longitude);
      }
      
      showMap = () => {
        return (<Map className="listing_card_map"
      google={this.props.google}
      zoom={2}
      initialCenter={{ lat: this.state.latitude, lng: this.state.longitude }}
      fullscreenControl={false}
    >
      <Marker position={{ lat: this.state.latitude, lng: this.state.longitude }} />
    </Map>)
  }
  
  showCompletions = () => {
    return (
      <Script
        url={urlPlaces}
        onLoad={this.handleScriptLoad}
      />)
  }
  
  render() {
    const key = process.env.REACT_APP_PLACES_KEY;
    const urlPlaces = `https://maps.googleapis.com/maps/api/js?key=${this.key}&libraries=places`;
    return (
      <>


      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_PLACES_KEY
})(MapCont);


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
