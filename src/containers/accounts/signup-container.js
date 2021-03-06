import React  from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SignUp from '../../components/accounts/signup'
import * as  SessionActions from '../../actions/accounts/session-actions'


export class SignUpContainer extends React.Component { 
    render() {
      //console.log(this.props)
      return (
        /*<Counter count={this.props.count} //Valor que se ha recogido mediante mapStateToProps y que pasamos desde el contenedor al componente vista. Porfefecto pasa el initialState
            incrementar={this.props.actions.incValue}
            decrementar={this.props.actions.decValue}/> // Acción que pasamos desde el contenedor al componente vista. De las posibles acciones a despachar recogidas por bindActionCreators
      */
        <div>
            <SignUp 
              text={this.props.text} 
              onSubmit={this.props.actions.signUpAsync} 
              response={this.props.response} 
              isFetching ={this.props.isFetching} 
              button ={this.props.button}
              didInvalidate={this.props.didInvalidate}
              isAuthenticated={this.props.isAuthenticated}/>
        </div>
        )
    }
}

SignUpContainer.propTypes = {
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
        text : 'Feel free! Sign up...',
        response : state.session.response,
        isFetching : state.session.isFetching,
        button : state.session.button,
        didInvalidate : state.session.didInvalidate,
        isAuthenticated : state.session.isAuthenticated
    };
  }
  
  function mapDispatchToProps(dispatch) { 
    return { 
      actions: bindActionCreators(SessionActions, dispatch)
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer)