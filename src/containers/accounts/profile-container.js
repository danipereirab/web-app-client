import React  from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Profile from '../../components/accounts/profile'
import * as  ProfileActions from '../../actions/accounts/profile-actions'

export class ProfileContainer extends React.Component { 
    render() {
      return (
          <Profile session={this.props.session}/>
      )
    }
}

ProfileContainer.propTypes = {
    session : PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    isFetching : PropTypes.bool.isRequired,
    button : PropTypes.string.isRequired,
    response : PropTypes.string.isRequired,
    didInvalidate : PropTypes.bool.isRequired,
    isAuthenticated : PropTypes.bool.isRequired
};

function mapStateToProps(state, props) { 
    return {
        session: state.session, 
        text : 'You are in. Visit your private zone.',
        response : state.session.response,
        isFetching : state.session.isFetching,
        button : state.session.button,
        didInvalidate : state.session.didInvalidate,
        isAuthenticated : state.session.isAuthenticated
    };
  }
  
function mapDispatchToProps(dispatch) { 
    return { 
      actions: bindActionCreators(ProfileActions, dispatch)
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer)

