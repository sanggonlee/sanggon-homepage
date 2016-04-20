import React from 'react';
import NavLink from './NavLink';
import AccountsUIWrapper from './AccountsUIWrapper';

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav" className="main-header">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})