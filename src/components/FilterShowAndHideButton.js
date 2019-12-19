import React, { Component } from 'react'
import { Button, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


class FilterShowAndHideButton extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleClick = () => {
    if (this.state.open === true) {
      this.setState({ open: false })
    } else {
      this.setState({ open: true })
    }
  }

  render() {
    const { open } = this.state
    return (
      <>
        <Button
          onClick={this.handleClick}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <p>Filters
          {this.state.open ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
          </p>
        </Button>
        <Collapse in={open}>
        <p>hola</p>
        </Collapse>
      </>
    )
  }
}

export default FilterShowAndHideButton;

