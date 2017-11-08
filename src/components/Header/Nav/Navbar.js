import React, { Component } from 'react';
import styled from './Nav.css';

class Navbar extends Component {
  render() {
    return (
      <nav className={styled.navbar}>
        <a href="" className={styled.navbarBrand}>Orcaso</a>
        <ul className={styled.navbarNav}>
          <li className={styled.navItem}>Pricing</li>
          <li className={styled.navItem}>Contact Us</li>
          <li className={styled.navItem}>Sign in</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
