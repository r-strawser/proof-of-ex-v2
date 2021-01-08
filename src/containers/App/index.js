import React, { Component }   from 'react'
import PropTypes              from 'prop-types'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { MuiThemeProvider }   from '@material-ui/core/styles'
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import * as providerActionCreators from '../../core/actions/actions-provider'
import theme                    from 'configs/theme/config-theme'
import HomeView                 from 'containers/HomeView'
import AssetsView               from 'containers/AssetsView'
import PendingTransactionsView  from 'containers/PendingTransactionsView'
import LatestUploadsView        from 'containers/LatestUploadsView'
import UploadView               from 'containers/UploadView'
import Header                   from './components/Header'
import Footer                   from './components/Footer'
import MetaMaskNotification     from './components/MetaMaskNotification'

import './styles.scss' // global styles

class App extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.provider.setProvider()
  }


  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HashRouter>
          <div>
            <Header />
            <Footer />
            <div className="app-shell">
              <Switch>
                <Route path="/home" component={HomeView} />
                <Route path="/assets" component={AssetsView} />
                <Route path="/pending" component={PendingTransactionsView} />
                <Route path="/latest" component={LatestUploadsView} />
                <Route path="/upload" component={UploadView} />
                <Redirect from="/" to="/home" />
              </Switch>
            </div>
          </div>
        </HashRouter>
        <MetaMaskNotification />
      </MuiThemeProvider>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      provider: bindActionCreators(providerActionCreators, dispatch)
    }
  }
}

App.propTypes = {
  actions: PropTypes.shape({}).isRequired
}

export default connect(null, mapDispatchToProps)(App)
