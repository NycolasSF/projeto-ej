import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import Listagem from './pages/Listagem/listagem'

import * as serviceWorker from './serviceWorker';

// o certo é ter um arquivo routes para puxar todas as paginas e tudo mais
// Não vou criar porque não sei se o  time quer assim também.

ReactDOM.render(
  <React.StrictMode>
    <Listagem/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
