import React, { Component } from 'react'
import FilterInputField from './FilterInputField'
import FilterShowAndHideButton from './FilterShowAndHideButton'

export default class SearchBar extends Component {
  render() {
    return (
      <>
      <FilterInputField />
      <FilterShowAndHideButton />
      </>
    )
  }
}
