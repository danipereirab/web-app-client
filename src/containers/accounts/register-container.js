import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Register from '../../components/accounts/register'
import * as  AccountActions from '../../actions/accounts/account-actions'

class RegisterContainer extends React.Component { 
    constructor(props) {
        super(props);
      }
    render() {
      //console.log(this.props)
      return (
        /*<Counter count={this.props.count} //Valor que se ha recogido mediante mapStateToProps y que pasamos desde el contenedor al componente vista. Porfefecto pasa el initialState
            incrementar={this.props.actions.incValue}
            decrementar={this.props.actions.decValue}/> // Acción que pasamos desde el contenedor al componente vista. De las posibles acciones a despachar recogidas por bindActionCreators
      */
        <div>
            <Register text={this.props.text} onSubmit={this.props.actions.addUser} response={this.props.response} isFetching ={this.props.isFetching} />
        </div>
        )
    }
}

RegisterContainer.propTypes = {
    account : PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    response : PropTypes.string.isRequired,
    isFetching : PropTypes.bool.isRequired,
  };


  function mapStateToProps(state, props) { //Valor recogido de store y generado por reducer. 
    return {
        account: state.account, //Lo asignamos al props.account del contenedor y que pasará al componente vista.
        text : 'Feel free! Register a new account...',
        response : state.account.response,
        isFetching : state.account.isFetching
    };
  }
  
  function mapDispatchToProps(dispatch) { //¿Qué acciónes podemos a despachar?. Las definidias por CounterActions.
    return { 
      actions: bindActionCreators(AccountActions, dispatch)
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer)