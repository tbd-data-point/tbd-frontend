import React from 'react'
import ReactDOM from 'react-dom'
import './assets/scss/index.css'
import App from './App'
import { ScrollToTop } from './components/helpers/hooks'
import { BrowserRouter as Router } from 'react-router-dom'
// import reportWebVitals from './reportWebVitals'
import { CookiesProvider } from 'react-cookie'
import * as serviceWorker from './service-worker.js'

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()

serviceWorker.register()
