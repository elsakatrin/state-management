import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CounterProvider} from './counterContext'

//Making global state available 
//Wrapping the app component with counterprovider so we can use it through app js


ReactDOM.render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
