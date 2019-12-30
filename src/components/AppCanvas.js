import React, { Component } from 'react'
import { Col, Row, Form, Button, Collapse } from 'react-bootstrap'
import FilterLocationField from './FilterLocationField'
import FilterShowAndHideButton from './FilterShowAndHideButton'
import FilterRoomsNumber from './FilterRoomsNumber'
import CardsContainer from './CardsContainer'
import FilterPriceInput from './FilterPriceInput'
import FilterSizeInput from './FilterSizeInput'
import calls from '../service/Calls'
import '../style/Styles.css'

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
    return (
      <>
        <div className="search_filters_container">
          <Row className="pt-2 pb-2 pl-3">
            {/* LOCATION */}
            <Col className="search_filter_col col-9">
              <FilterLocationField
                location={this.state.location}
                setLocation={(location) => this.setState({ location })} />
            </Col>
            {/* FILTERS COLLAPSABLE */}
            <Col className="col-2">
              <FilterShowAndHideButton
                showFilters={this.state.showFilters}
                displayFilters={(showFilters) => this.setState({ showFilters })} />
            </Col>

          </Row>
        </div>
        {/* FILTERS */}
        <Collapse in={this.state.showFilters}>
          <Form onSubmit={this.handleSubmit}>

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
              <Row className=" p-4">
                <Button size="sm" className="btn_submit m-auto" type="submit">Ver Inmuebles</Button>
              </Row>
            </div>
          </Form>
        </Collapse>
        <CardsContainer apartmentsToDisplay={this.state.apartmentsResult} />
      </>
    )
  }
}

export default AppCanvas;