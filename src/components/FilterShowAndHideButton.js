import React, { Component } from 'react'
import { Button, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


class FilterShowAndHideButton extends Component {


  handleClick = () => {
    const open = this.props.showFilters;
    console.log('open in d',this.props.showFilters);

    if (open === true) {
      this.props.displayFilters(false)
    } else {
      this.props.displayFilters(true)
    }
  }

  render() {    
    return (
      <>
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
        <Collapse in={this.props.showFilters}>
        <>
        <h2>hola</h2>
        <h2>hola</h2>
        <h2>hola</h2>
        <h2>hola</h2>
        <h2>hola</h2>
        </>
        </Collapse>
      </>
    )
  }
}

export default FilterShowAndHideButton;

