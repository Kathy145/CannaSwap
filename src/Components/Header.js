import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <nav className="light-green darken-3">
        <div className="nav-wrapper">
          <a href="/" className="right brand-logo">CannaSwap</a>
          <ul className="left hide-on-med-and-down">
            <li>
              <a href="/Sign-up ">Sign-up</a>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}

export default Header
