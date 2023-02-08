/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'regenerator-runtime/runtime'

import Menu from './components/menu'
import Home from './components/home'
import { store } from './store'
import ErrorBoundary from './components/ErrorBoundary'

/**
 * We can start our initial App here in the main.js file
 */

const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <div className='App'>
        <Menu />
        <Home />
      </div>
    </Provider>
  </ErrorBoundary>
)

// Render this out
ReactDOM.render(<App />, document.getElementById('root'))
