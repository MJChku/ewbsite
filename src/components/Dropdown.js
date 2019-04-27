import React from 'react';
import {
  SiteHeader, SiteNav, NavLink, Logo, Name, Main,
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
    return (
      <div onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <NavLink >Aboutus</NavLink>
        <div>
          {  open
             &&
             children.map((child) => (
              <NavLink underline="#16a085" to={{ child }}>
                {child}
              </NavLink>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Navhead


