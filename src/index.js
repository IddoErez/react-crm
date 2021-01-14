import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import { ClientStore as clientStore } from './stores/ClientStore'

const ClientStore = new clientStore()

const stores = {
  ClientStore
}
ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
