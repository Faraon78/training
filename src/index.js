import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {createBrowserHistory} from 'history'

import './index.css';
import App from './App';
import store from './Redux/store/store'

const history = createBrowserHistory()
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter history={history}>
        <App />
        </BrowserRouter>  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


