import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../style/Styles.css'
// import axios from 'axios'

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      location: this.props.location
    }
    console.log('map props', props);
  }

  render() {
    return (
      <Map className="listing_card_map"
        google={this.props.google}
        zoom={2}
        initialCenter={{ lat: this.state.latitude, lng: this.state.longitude }}
        fullscreenControl= {false}
      >
        <Marker position={{ lat: this.state.latitude, lng: this.state.longitude }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_PLACES_KEY
})(MapContainer);
