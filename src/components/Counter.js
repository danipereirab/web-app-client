import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'

export default class Counter extends React.Component {  
    render() {
      return (
        <div>Valor: {this.props.count} <br/>
        <button type="button" onClick={this.props.incrementar} >Incrementar!</button> 
        <button type="button" onClick={this.props.decrementar} >Decrementar!</button>
        </div>

      );
    }
  }

  Counter.propTypes = {  
    count : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired
  };