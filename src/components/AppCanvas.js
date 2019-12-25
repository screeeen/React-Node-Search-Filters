import React, { Component } from 'react'
import { Col, Row, Form, Button, Collapse } from 'react-bootstrap'
import FilterLocationField from './FilterLocationField'
import FilterShowAndHideButton from './FilterShowAndHideButton'
import CardsContainer from './CardsContainer'
import PriceInput from './PriceInput'
import SizeInput from './SizeInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

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
      location: '',
    }
    console.log('state', this.state);
  }

  filtersButton = () => {
    if (this.state.showFilters === true) {
      this.setState({ showFilters: false })
    } else {
      this.setState({ showFilters: true })
    }
  }


  render() {
    return (
      <>
        <Row>
          {/* LOCATION */}
          <FilterLocationField
            location={this.state.location}
            setLocation={(location) => this.setState({ location })} />

          {/* FILTERS COLLAPSABLE */}
          <FilterShowAndHideButton
            showFilters={this.state.showFilters}
            displayFilters={(showFilters) => this.setState({ showFilters })} />
        </Row>

        {/* FILTERS */}
        <Collapse in={this.state.showFilters}>
          <div id="example-collapse-text">
            <PriceInput
              priceMax={this.state.priceMax}
              priceMin={this.state.priceMin}
              setPriceMin={(priceMin) => this.setState({ priceMin })}
              setPriceMax={(priceMax) => this.setState({ priceMax })}
            />
            <SizeInput
              sizeMax={this.state.sizeMax}
              sizeMin={this.state.sizeMin}
              setSizeMin={(sizeMin) => this.setState({ sizeMin })}
              setSizeMax={(sizeMax) => this.setState({ sizeMax })}
            />
          </div>
        </Collapse>
        <Col>


          <Form inline >
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </>
    )
  }
}

export default AppCanvas;