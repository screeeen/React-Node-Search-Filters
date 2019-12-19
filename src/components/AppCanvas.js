import React, { Component } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import FiltersContainer from './FiltersContainer'
import CardsContainer from './CardsContainer'

class AppCanvas extends Component {
  constructor() {
    super();
    this.state = {
      showFilters: false
    }
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <FiltersContainer hidden={this.state.showFilters}/>
        <CardsContainer />
      </div>
    )
  }
}

export default AppCanvas;