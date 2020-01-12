import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import List from '@material-ui/core/List'
import omit from 'lodash/omit'

import me from '../assets/img/me.svg'
import ArrowBackIosSharp from '@material-ui/icons/ArrowBackIosSharp'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

function ListItemLink(props) {
  return (
    <ListItem button component="a" {...omit(props, 'children')}>
      {props.children}
    </ListItem>
  )
}

const Navbar = class extends React.Component {
  static propTypes = {
    handleToggleClick: PropTypes.func,
    isSmall: PropTypes.bool,
  }

  static defaultPros = {
    handleToggleClick: undefined,
    isSmall: false,
  }

  getStyle = () => {
    const style = {
      arrowBackIosSharp: {
        position: 'absolute',
        right: 0,
        color: '#fff',
        fontSize: 25,
        margin: '8px 10px',
        cursor: 'pointer',
        transition: 'all .3s ease',
      },
    }

    if (this.props.isSmall) {
      style.arrowBackIosSharp['transform'] = 'rotate(180deg)'
    }

    return style
  }

  render() {
    const style = this.getStyle()
    const navLinkProps = {
      style: {
        textAlign: 'center',
        width: '100%',
      },
    }

    return (
      <div
        role="navigation"
        className="vertical-navbar"
        aria-label="main-navigation"
      >
        <div
          style={{
            position: 'relative',
          }}
        >
          <ArrowBackIosSharp
            onClick={this.props.handleToggleClick}
            style={style.arrowBackIosSharp}
          />
          <img src={me} alt="nerd portfolio" />
          <a
            className="docs-logo"
            href="/"
            style={{
              position: 'absolute',
              bottom: 10,
              zIndex: 999999999,
              float: 'left',
              textAlign: 'left',
              left: '13px',
              backgroundColor: 'transparent',
            }}
          >
            <div
              className="-text-center"
              style={{
                fontSize: '.8rem',
                backgroundColor: '#0000',
              }}
            >
              <span
                className="nav__fontLogo -cubic-font"
                style={{
                  color: '#fafafa',
                  fontSize: '3.85em',
                }}
              >
                GiuB
              </span>
              <br />
              <span
                style={{
                  color: '#fafafa',
                  fontWeight: 700,
                  float: 'right',
                  marginTop: '-15px',
                  fontSize: 13,
                }}
              >
                web.dev
              </span>
            </div>
          </a>
        </div>
        <button className="docs-nav-toggle" aria-expanded="false">
          <svg className="docs-icon" focusable="false" viewBox="0 0 32 32">
            <path d="M3,3 29,3 M3,16 29,16 M3,29 29,29"></path>
          </svg>
          Menu
        </button>
        <List component="nav" className="docs-nav">
          <ListItemLink components="div">
            <Link className="navbar-item" {...navLinkProps} to="/about">
              About
            </Link>
          </ListItemLink>
          <ListItemLink components="div">
            <Link className="navbar-item" {...navLinkProps} to="/products">
              Products
            </Link>
          </ListItemLink>
          <ListItemLink components="div">
            <Link className="navbar-item" {...navLinkProps} to="/blog">
              Blog
            </Link>
          </ListItemLink>
          <ListItemLink components="div">
            <Link
              {...navLinkProps}
              className="navbar-item"
              to="/contact/examples"
            >
              Form Examples
            </Link>
          </ListItemLink>
        </List>
      </div>
    )
  }
}

export default Navbar
