import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render ( 
  /*App component loaded from App.js*/
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  document.getElementById('root') // grabs root div from public/index.html
);

