import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './components/home/header';
import _Main from './components/home/_main';
import * as  SessionActions from './actions/accounts/session-actions'
import { withRouter } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
        <div>
          <Header 
            isAuthenticated={this.props.isAuthenticated}
            userName={this.props.userName}
            onClick={this.props.actions.signOutAsync} />
          <_Main isAuthenticated={this.props.isAuthenticated}/>
        </div>  
    );
  }
}

App.propTypes = {
  account : PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  isAuthenticated : PropTypes.bool.isRequired
};

function mapStateToProps(state, props) { 
  return {
      account: state.session, 
      isAuthenticated : state.session.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) { 
  dispatch(SessionActions.isLoggedInAsync()); //Verify is token jwt exists. If is true --> isAuthenticated = true
  return { 
    actions: bindActionCreators(SessionActions, dispatch)
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))