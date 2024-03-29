import React from 'react';
import ReactDOM from 'react-dom';
import './less/styles.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'babel-polyfill';

ReactDOM.render(
  <main>
    <App />
  </main>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
