import React, { Component } from 'react'
import CardApartment from './CardAppartment'

class CardsContainer extends Component {

  displayApartmentsSearch = () => {
    return this.props.apartmentsToDisplay.slice(0).slice(0).reverse().map((oneApartment, i) => {
      const { location,latitude, longitude,name, price, sqm, numberOfBedrooms, numberOfBathrooms } = oneApartment;
      return (
        <CardApartment
          key={i}
          location={location}
          name={name}
          price={price}
          sqm={sqm}
          numberOfBedrooms={numberOfBedrooms}
          numberOfBathrooms={numberOfBathrooms}
        />
      )
    })
  }

  render() {
    return (
      <>
        {this.displayApartmentsSearch()}
      </>
    )
  }
}

export default CardsContainer;