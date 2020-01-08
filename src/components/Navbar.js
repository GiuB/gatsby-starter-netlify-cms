import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <div
        className="vertical-navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <img src="https://image.flaticon.com/icons/svg/168/168732.svg" />
        <a className="docs-logo" href="/" style={{
          position: 'absolute',
          marginTop: '-15px',
          zIndex: 999999999,
          float: 'left',
          textAlign: 'left',
          left: '13px',
          top: '165px',
          backgroundColor: 'transparent',
        }}>
          <div className="-text-center" style={{
            fontSize: '.8rem',
            backgroundColor: '#0000',
          }}>
            <span className="nav__fontLogo -cubic-font"
             style={{
              color: '#ffffffe0',
              fontSize: '3.85em'
             }}>GiuB</span>
            <br />
            <span style={{
                color: '#ffffffe0',
                fontWeight: 900,
                float: 'right',
                marginTop: '-15px',
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
