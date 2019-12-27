import React, { Component } from 'react'
import calls from '../service/Calls'
import Card from './Card'

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
        console.log(apartments);
        this.setState({ apartments })
      })
  }

  generateApartmentsList = () => {
    return this.state.apartments.reverse().map((oneApartment, i) => {
      console.log(this.state.apartments);

      // const { } = oneApartment;
      return (
        <Card
        key = {i}
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