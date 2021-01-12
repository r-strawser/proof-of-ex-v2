import React, { Component }         from 'react'
import { styles }                   from './styles.scss'
import PropTypes                    from 'prop-types'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import * as accountActionCreators from '../../core/actions/actions-account'
import { requestAccountAccess }     from '../../core/libs/lib-metamask-helper'
import Stepper                      from '../../components/Stepper'


class RegisterView extends Component {

    render() {
        return (
            <div className={styles}>
                This is the RegisterView!
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            account: bindActionCreators(accountActionCreators, dispatch)
        }
    }
}

RegisterView.propTypes = {
    actions: PropTypes.shape({}).isRequired
}


export default connect(null, mapDispatchToProps)(RegisterView)