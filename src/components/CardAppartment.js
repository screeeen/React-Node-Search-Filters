import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

class CardApartment extends Component {


  render() {
    return (
      <Card className="bg-dark text-white">
        <Card.Img src="https://picsum.photos/200/300" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.price}€</Card.Text>
          <Card.Text>{this.props.sqm} sqm</Card.Text>
          <Card.Text>{this.props.numberOfBedrooms} rooms</Card.Text>
          <Card.Text>{this.props.numberOfBathrooms} bathrooms</Card.Text>
        </Card.ImgOverlay>
      </Card>

    )
  }
}

export default CardApartment;