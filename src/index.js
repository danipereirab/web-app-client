import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './resources/css/index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const store = configureStore();




ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>, document.getElementById('root'))
registerServiceWorker();
