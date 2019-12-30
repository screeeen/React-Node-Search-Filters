import React, { Component } from 'react'
import { Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import '../style/Styles.css'


class FilterShowAndHideButton extends Component {


  handleClick = () => {
    if (this.props.showFilters === true) {
      this.props.displayFilters(false)
    } else {
      this.props.displayFilters(true)
    }
  }

  render() {
    return (
      <Row>
        <Button size="sm" 
          className="btn_custom shadow-none"
          onClick={this.handleClick}
          aria-controls="example-collapse-text"
          aria-expanded={this.props.showFilters}
        >Filtros           {this.props.showFilters ? (
              <FontAwesomeIcon className="search_filter_icon" icon={faChevronUp} />
            ) : (
                <FontAwesomeIcon className="search_filter_icon" icon={faChevronDown} />
              )}</Button>


      </Row>
    )
  }
}

export default FilterShowAndHideButton;

