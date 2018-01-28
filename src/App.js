import React, { Component } from 'react';
import CounterContainer from './containers/CounterContainer'
import Header from './components/home/header';
import _Main from './components/home/_main';

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <_Main />
        </div>  
    );
  }
}

export default App;
