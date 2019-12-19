import React, { Component } from 'react'
import { Col, Row,Form, Button } from 'react-bootstrap'
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
      location: ''
    }
  }

  render() {
    return (
      <>
        <Row>
            <FilterLocationField />
            <FilterShowAndHideButton/>
        </Row>
        <Col>
          <PriceInput />
          <SizeInput />
        <Form inline>
          <Button type="submit">Submit</Button>
        </Form>
        </Col>
      </>
    )
  }
}

export default AppCanvas;