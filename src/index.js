import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/AktivGroteskCorp-Bold.woff2'
import './fonts/AktivGroteskCorp-Regular.woff2'
import './fonts/AktivGroteskCorp-MediumItalic.woff2'
import './fonts/AktivGroteskCorp-Italic.woff2'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
