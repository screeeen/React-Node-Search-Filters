import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../style/Styles.css'
class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.latitude,
      longitude: this.props.longitude
    }
    console.log('map props', props);

  }

  render() {
    return (
      <Map className="listing_card_map"
        google={this.props.google}
        zoom={8}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        <Marker position={{ lat: 48.00, lng: -122.00 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_PLACES_KEY
})(MapContainer);
