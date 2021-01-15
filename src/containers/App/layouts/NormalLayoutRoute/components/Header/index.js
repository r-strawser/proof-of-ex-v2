import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { withRouter }       from 'react-router-dom'
import AppBar               from 'components/AppBar'
import Typography           from 'components/Typography'
import Toolbar              from '@material-ui/core/Toolbar'
import IconButton           from '@material-ui/core/IconButton'
import Menu                 from '@material-ui/core/Menu'
import MenuItem             from '@material-ui/core/MenuItem'
import AccountCircle        from '@material-ui/icons/AccountCircle'
import { appConfig }        from 'configs/config-main'
import Navigation           from './components/Navigation'
import { styles }           from './styles.scss'

import { connect }              from 'react-redux'
import { bindActionCreators }   from 'redux'

import * as accountActionCreators  from 'core/actions/actions-account'
import * as contractActionCreators from 'core/actions/actions-contract'
import { requestAccountAccess }    from 'core/libs/lib-metamask-helper'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      anchorEl: null,
      email: '',
      id: ''
    }
  }

  componentDidMount() {
    const { actions } = this.props

    requestAccountAccess((defaultAccount) => {
      actions.account.setDefaultAccount(defaultAccount)
    })
  }

  getMenu() {
    const { anchorEl } = this.state
    const { id, email } = this.props.account

    return (
      <div>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className="dropdown"
          aria-owns={anchorEl ? 'simple-menu' : null}
          onClick={this.handleClick}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.close}
        >
          <MenuItem data-link="account" onClick={this.goTo}>{id}</MenuItem>
          <MenuItem data-link="settings" onClick={this.goTo}>Menu Option 2</MenuItem>
        </Menu>
      </div>
    )
  }

  goTo = (evt) => {
    const { history } = this.props
    const { link } = evt.currentTarget.dataset

    history.push(link)
    this.close()
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  close = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const menu = this.getMenu()

    return (
      <div className={styles}>
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit">
              {appConfig.name}
            </Typography>
            {menu}
          </Toolbar>
        </AppBar>
        <Navigation />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    account: state.account
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      account: bindActionCreators(accountActionCreators, dispatch)
    }
  }
}

Header.propTypes = {
  account: PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.string
  }).isRequired,
  history: PropTypes.shape({}).isRequired
}

//Header.defaultProps = {
// account: ''
//}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
