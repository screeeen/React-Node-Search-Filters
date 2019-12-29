import React, { Component } from 'react'
import { Button,Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


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
        <Button
          onClick={this.handleClick}
          aria-controls="example-collapse-text"
          aria-expanded={this.props.showFilters}
        >
          <p>Filters
          {this.props.showFilters ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
          </p>
        </Button>
      </Row>
    )
  }
}

export default FilterShowAndHideButton;

