import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBed, faBath } from '@fortawesome/free-solid-svg-icons'
// import MapContainer from './MapContainer'

class CardApartment extends Component {

  render() {
    const picURL = `https://picsum.photos/200/300/?random&t=` + new Date().getTime() + `)`;

    return (
      <div>
        <div className="listing_card card">
          <img className="listing_card_image_container" src={picURL} alt="apartment pic" />
          <Row>
            <div className="listing_card_location_names_and_prices pl-3">
              <div className="listing_card_location_names">{this.props.location}</div>
              <div className="listing_card_price" >{this.props.price}€</div>
              <div className="listing_card_price_per_square_meter">{this.props.sqm}€/m²</div>
              <div className="listing_card_map" >
                {/* <MapContainer latitude={this.props.latitude} longitude={this.props.longitude} location ={this.props.location}/> */}
              </div>
            </div>
          </Row>
        </div >
        <div className="listing_card_details">
          <FontAwesomeIcon icon={faCheck} />
          <div className="listing_card_price_per_square_meter">{this.props.sqm}m²</div>
          <FontAwesomeIcon icon={faBed} />
          <div className="bedrooms">{this.props.numberOfBedrooms} rooms</div>
          <FontAwesomeIcon icon={faBath} />
          <div className="badrooms">{this.props.numberOfBathrooms} bathrooms</div>
        </div>
        <div className="listing_card_title_and_agency">
          <div className="listing_card_title listing_card_title_full_width">{this.props.name}</div>
        </div>
      </div >
    )
  }
}

export default CardApartment;