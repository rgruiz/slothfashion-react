import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className="alto-maximo">
      <App />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
