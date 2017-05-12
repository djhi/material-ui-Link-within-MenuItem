import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './App'
import Home from './components/Home'
import About from './components/About'
import './index.css'

injectTapEventPlugin()

const Root = () => (
  <MuiThemeProvider>
    <Router>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </App>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
