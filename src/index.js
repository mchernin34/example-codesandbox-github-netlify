import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

function App() {
  return (
    <div className="App">
      <h1>Testing CodeSandbox Integrations</h1>
      <h2>Deploying to:</h2>
      <ul>
        <li>‣ Zeit Now</li>
        <li>‣ Netlify</li>
      </ul>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
