import React, { Component } from 'react'
import { Button, Collapse } from 'react-bootstrap';


class FilterShowAndHideButton extends Component {
  constructor() {
    super();
    this.state = {
      open: true
    };
  }

  handleClick = () => {
    if (this.state.open === true){
      this.setState({open: false})
    } else {
      this.setState({open: true}) 
    }
  }

  render() {
    const {open} = this.state
    return (
      <>
        <Button
          onClick={this.handleClick}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <p>click</p>
      </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
        </div>
        </Collapse>
      </>
    )
  }
}

export default FilterShowAndHideButton;

