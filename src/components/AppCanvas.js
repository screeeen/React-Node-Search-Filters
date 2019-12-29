import React, { Component } from 'react'
import { Col, Row, Form, Button, Collapse } from 'react-bootstrap'
import FilterLocationField from './FilterLocationField'
import FilterShowAndHideButton from './FilterShowAndHideButton'
import FilterRoomsNumber from './FilterRoomsNumber'
import CardsContainer from './CardsContainer'
import FilterPriceInput from './FilterPriceInput'
import FilterSizeInput from './FilterSizeInput'
import calls from '../service/Calls'
import '../style/Style.css'

class AppCanvas extends Component {
  constructor() {
    super();
    this.state = {
      showFilters: false,
      priceMax: 10000000,
      priceMin: 0,
      sizeMax: 100000000,
      sizeMin: 0,
      roomsNumber: 0,
      location: '',
      apartmentsResult: []
    }
  }

  componentDidMount() {
    calls.getApartments()
      .then(res => {
        const apartmentList = res.data;
        this.setState({ apartmentsResult: apartmentList })
      })
  }

  filtersButton = () => {
    if (this.state.showFilters === true) {
      this.setState({ showFilters: false })
    } else {
      this.setState({ showFilters: true })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const query = {
      location: this.state.location,
      priceMax: this.state.priceMax,
      priceMin: this.state.priceMin,
      sizeMax: this.state.sizeMax,
      sizeMin: this.state.sizeMin,
      roomsNumber: this.state.roomsNumber
    }

    calls.search(query)
      .then((apartmentList) => {
        console.log('data pack', apartmentList);
        this.setState({ apartmentsResult: apartmentList });
      })
  }


  render() {
    // const urlPlaces = `https://maps.googleapis.com/maps/api/js?key=${process.env.PLACES_KEY}&libraries=places`;
    // console.log('url', urlPlaces);
    return (

      <>
  <Row >
    {/* LOCATION */}
    <Col className="col-9">
      <FilterLocationField
        location={this.state.location}
        setLocation={(location) => this.setState({ location })} />
    </Col>

    {/* FILTERS COLLAPSABLE */}
    <Col className="col-3">

      <FilterShowAndHideButton
        showFilters={this.state.showFilters}
        displayFilters={(showFilters) => this.setState({ showFilters })} />
    </Col>

  </Row>

  {/* FILTERS */}
  <Collapse in={this.state.showFilters}>
    <Form inline onSubmit={this.handleSubmit}>

      <div id="example-collapse-text">
        <FilterPriceInput
          priceMax={this.state.priceMax}
          priceMin={this.state.priceMin}
          setPriceMin={(priceMin) => this.setState({ priceMin })}
          setPriceMax={(priceMax) => this.setState({ priceMax })}
        />
        <FilterSizeInput
          sizeMax={this.state.sizeMax}
          sizeMin={this.state.sizeMin}
          setSizeMin={(sizeMin) => this.setState({ sizeMin })}
          setSizeMax={(sizeMax) => this.setState({ sizeMax })}
        />

        <FilterRoomsNumber
          roomsNumber={this.state.roomsNumber}
          setRoomsNumber={(roomsNumber) => this.setState({ roomsNumber })}

        />
        <Col>
          <Button type="submit">Submit</Button>
        </Col>
      </div>
    </Form>
  </Collapse>
  <CardsContainer apartmentsToDisplay={this.state.apartmentsResult} />
</>
    )
  }
}

export default AppCanvas;