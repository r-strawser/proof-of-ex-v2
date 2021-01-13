import React, { Component }         from 'react'
import { styles }                   from './styles.scss'
import PropTypes                    from 'prop-types'
import { connect }                  from 'react-redux'
import { bindActionCreators }       from 'redux'
import * as accountActionCreators   from '../../core/actions/actions-account'
import { requestAccountAccess }     from '../../core/libs/lib-metamask-helper'
import Stepper                      from '../../components/Stepper'
import Photo                        from './components/Photo'
import { withRouter }               from 'react-router-dom'

import CredentialsPanel             from './panels/CredentialsPanel'
import GenerateHashPanel            from './panels/GenerateHashPanel'
import RegisterAssetPanel           from './panels/RegisterAssetPanel'
import SuccessPanel                 from './panels/SuccessPanel'


class RegisterView extends Component {

    getPanel = () => {
        const { location } = this.props
        return parseInt(location.search.substr(1).split('=')[1], 10)
    }


    renderContent() {
        const { panel } = this.getPanel()

        switch(panel) {
            case 1:
                return <CredentialsPanel />
            case 2:
                return <GenerateHashPanel />
            case 3:
                return <RegisterAssetPanel />
            case 4:
                return <SuccessPanel />
            default:
                break
        }
        return null
    }



    render() {
        const { asset } = this.props
        const panel = this.getPanel()

        return (
            <div className={styles}>
                <div id="register-view">
                    <Photo asset={asset} />
                    <div id="registration-form-container">
                        <Stepper activeStep={panel - 1}
                        steps={[
                            'Enter Credentials',
                            'Generate Unique Hash',
                            'Register'
                        ]}
                        />
                        <div id="registration-form">{this.renderContent()}</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        asset: state.asset
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
    actions: PropTypes.shape({}).isRequired,
    asset: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({}).isRequired
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterView))