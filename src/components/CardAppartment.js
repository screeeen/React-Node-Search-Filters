import React, { Component } from 'react'
// import '../style/Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBed, faBath } from '@fortawesome/free-solid-svg-icons'

class CardApartment extends Component {

  render() {
    const picURL = `https://picsum.photos/200/300/?random&t=` + new Date().getTime() +`)`;
    
    return (
      <div className="listing_card_col">
        <div className="listing_card card">
          <img className="listing_card_image_container" src={picURL} alt="apartment pic" />
          <div className="listing_card_location_names_and_prices pl-3">
            <div className="listing_card_location_names">{this.props.location}</div>
            <div className="listing_card_price" >{this.props.price}€</div>
            <div className="listing_card_price_per_square_meter">{this.props.sqm}€/m²</div>
          </div>
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