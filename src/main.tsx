import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Canvas from './components/canvas/Canvas'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Canvas />
    <App />
  </React.StrictMode>,
)
