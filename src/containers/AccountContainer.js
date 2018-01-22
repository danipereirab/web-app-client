import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../components/Login'
import Register from '../components/Register'
import ActionsAccount from '../actions/account-actions'

class AccountContainer extends React.Component { 
  render() {
    return (
      <ActionsAccount text="Hola" />
    )
  }
}

const mapStateToProps = state => ({
  text: state.text
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionsAccount, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountContainer)
