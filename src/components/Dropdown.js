import React from 'react';

import {
  NavLink,DropDown,NavLinkSecond
} from './Headings';

class Navhead extends React.Component {

    state = {
      Open: false
    }

  onMouseEnter = () => {
    this.setState({Open: true});
  }

  onMouseLeave = () => {
    this.setState({Open: false});
  }

  render() {
    const children = this.props.children
    const open = this.state.Open
    const color = this.props.children.underline
    return (
      <div  onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <NavLink underline={color} to={ children.head.link }>{children.head.name}</NavLink>
          <div>
          {  open
             &&
             children.sub.map((child) => (
              <NavLinkSecond underline="#16a085" to={ child.link }>
                {child.name}
              </NavLinkSecond>
            ))
          }
          </div>

      </div>
    );
  }
}

export default Navhead


