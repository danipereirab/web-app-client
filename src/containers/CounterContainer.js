import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Counter from '../components/Counter'
import * as  CounterActions from '../actions/counter-actions'

class CounterContainer extends React.Component { 
    constructor(props) {
        super(props);
      }
    render() {
      //console.log(this.props)
      return (
        <Counter count={this.props.count} //Valor que se ha recogido mediante mapStateToProps y que pasamos desde el contenedor al componente vista. Porfefecto pasa el initialState
            incrementar={this.props.actions.incValue}
            decrementar={this.props.actions.decValue}/> // Acción que pasamos desde el contenedor al componente vista. De las posibles acciones a despachar recogidas por bindActionCreators
      )
    }
}

CounterContainer.propTypes = {
    count: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  };


  function mapStateToProps(state, props) { //Valor recogido de store y generado por reducer. 
    //console.log(state.counter.count)
    return {
        count: state.counter.count //Lo asignamos al props.count de el contenedor y que pasará al componente vista.
    };
  }
  
  function mapDispatchToProps(dispatch) { //¿Qué acciónes podemos a despachar?. Las definidias por CounterActions.
    return {
      actions: bindActionCreators(CounterActions, dispatch)
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer)