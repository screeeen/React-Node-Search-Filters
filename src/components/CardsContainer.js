import React, { Component } from 'react'
import calls from '../service/Calls'
import CardApartment from './CardAppartment'

class CardsContainer extends Component {
  constructor() {
    super();
    this.state = {
      apartments: []
    }
  }

  componentDidMount() {
    calls.getApartments()
      .then(res => {
        const apartments = res.data;
        this.setState({ apartments })
      })
  }

  generateApartmentsList = () => {
    return this.state.apartments.slice(0).slice(0).reverse().map((oneApartment, i) => {
      const { name, price, sqm, numberOfBedrooms, numberOfBathrooms } = oneApartment;
      return (
        <CardApartment
          key={i}
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
        {this.generateApartmentsList()}

      </>
    )
  }
}

export default CardsContainer;