import React, { Component } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import FilterLocationField from './FilterLocationField'
import FilterShowAndHideButton from './FilterShowAndHideButton'
import CardsContainer from './CardsContainer'
import PriceInput from './PriceInput'
import SizeInput from './SizeInput'

class AppCanvas extends Component {
  constructor() {
    super();
    this.state = {
      showFilters: false,
      priceMax: 10000000,
      priceMin: 0,
      sizeMax: 100000000,
      sizeMin: 0,
      roomsNumber: 100,
      location: 'ff',
    }
    console.log('state', this.state);
  }


  render() {
    const mylocation = this.state.location;
    const myshowFilters = this.state.showFilters;
    console.log('my location', mylocation)
    console.log('my showfilters', myshowFilters)
    return (
      <>

        <Row>
          <FilterLocationField
            location={this.state.location}
            setLocation={(location) => this.setState({ location })} />
          <FilterShowAndHideButton
            showFilters={this.state.showFilters}
            displayFilters={(showFilters) => this.setState({ showFilters })} />
        </Row>
        <Col>
          {/* <PriceInput priceMax={this.state.priceMax} priceMin={this.state.priceMin} setPrice={(priceMax, priceMin) => this.setState({ priceMax, priceMin })} />
          <SizeInput /> */}
          <Form inline>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </>
    )
  }
}

export default AppCanvas;