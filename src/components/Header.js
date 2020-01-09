import React from 'react'
import PropTypes from 'prop-types'
import { upperFirst } from 'lodash'

import Navbar from '../components/Navbar'
import modStyle from './header.module.scss'


class Header extends React.Component {
  static OPEN_TYPES = ['full', 'small', 'off']

  static propsTypes = {
    open: PropTypes.oneOf(Header.OPEN_TYPE)
  }

  static defaultProps = {
    open: Header.OPEN_TYPES[0] // full
  }

  state = {
    open: this.props.open
  }

  render() {
    const { open } = this.state
    const openStyle = `open${upperFirst(open)}`

    return (
      <header
        className={`docs-header ${modStyle.el} ${openStyle}`}
      >
        <Navbar 
          handleToggleClick={e => this.setState({
            open: this.state.open === 'small' ? 'full' : 'small'
          })}
        />
      </header>
    )
  }
}

export default Header