import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Nav from './components/Navigation';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';

const store = configureStore();


ReactDOM.render(<Provider store={store}>
  <Nav />
</Provider>, document.getElementById('nav'))

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('section'))
registerServiceWorker();
