import React, { Component } from 'react'
import BottomNavigation     from 'components/BottomNavigation'
import { styles }           from './styles.scss'
import PropTypes            from 'prop-types'
import Button               from 'components/Button'
import AddIcon              from '@material-ui/icons/Add'
import { withRouter }       from 'react-router-dom'

class Footer extends Component {

  onClick = () => {
    const { history } = this.props
    history.push('/upload')
  }


  render() {
    return (
      <div className={styles}>
        <BottomNavigation>
          <div className="container">
          <Button
            color="primary"
            variant="fab"
            className="add-btn"
            onClick={this.onClick}
          >
            <AddIcon />
          </Button>
          </div>
        </BottomNavigation>
      </div>
    )
  }
}

Footer.propTypes = {
  history: PropTypes.shape({}).isRequired
}

export default withRouter(Footer)
