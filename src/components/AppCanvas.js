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

  handleClick = () => {
    if (this.state.showFilters === true) {
      this.setState({ showFilters: false })
    } else {
      this.setState({ showFilters: true })
    }
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
          {/* <FilterShowAndHideButton
            showFilters={this.state.showFilters}
            displayFilters={(showFilters) => this.setState({ showFilters })} /> */}

          <Button
            onClick={this.handleClick}
            aria-controls="example-collapse-text"
            aria-expanded={this.state.showFilters}
          >
            <p>Filters
          {this.state.showFilters ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
            </p>
          </Button>

        </Row>
        <Collapse in={this.state.showFilters}>
          <div id="example-collapse-text">
          <PriceInput priceMax={this.state.priceMax} priceMin={this.state.priceMin} setPrice={(priceMax, priceMin) => this.setState({ priceMax, priceMin })} />
          <SizeInput />
          </div>
        </Collapse>
        <Col>


          <Form inline>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </>
    )
  }
}

export default AppCanvas;