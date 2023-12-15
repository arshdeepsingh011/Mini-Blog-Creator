// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import "./index.css"
import { Toaster } from 'react-hot-toast';
import { MyContextProvider } from './context/appcontext';


ReactDOM.render(
  <Provider store={store}>
    <MyContextProvider>
      <App />
    </MyContextProvider>
    <Toaster/>
  </Provider>,
  document.getElementById('root')
);
