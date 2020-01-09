import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import me from '../assets/img/me.svg'


const Navbar = class extends React.Component {
  static propTypes = {
    handleToggleClick: PropTypes.func,
  }

  static defaultPros = {
    handleToggleClick: undefined,
  }

  render() {
    return (
      <div
        role="navigation"
        className="vertical-navbar"
        aria-label="main-navigation"
      >
        <button style={{ float: 'right' }} onClick={this.props.handleToggleClick}>TOggle</button>
        <img src={me} alt="nerd portfolio" />
        <a className="docs-logo" href="/" style={{
          position: 'absolute',
          marginTop: '-15px',
          zIndex: 999999999,
          float: 'left',
          textAlign: 'left',
          left: '13px',
          top: '240px',
          backgroundColor: 'transparent',
        }}>
          <div className="-text-center" style={{
            fontSize: '.8rem',
            backgroundColor: '#0000',
          }}>
            <span className="nav__fontLogo -cubic-font"
             style={{
              color: '#fafafa',
              fontSize: '3.85em'
             }}>GiuB</span>
            <br />
            <span style={{
                color: '#fafafa',
                fontWeight: 700,
                float: 'right',
                marginTop: '-15px',
                fontSize: 13,
            }}>web.dev
            </span>
          </div>
        </a>
        <button className="docs-nav-toggle" aria-expanded="false">
          <svg className="docs-icon" focusable="false" viewBox="0 0 32 32">
            <path d="M3,3 29,3 M3,16 29,16 M3,29 29,29"></path>
          </svg>
          Menu
        </button>
        <nav className="docs-nav" aria-labelledby="nav-label">
          <ul>
            <li>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
