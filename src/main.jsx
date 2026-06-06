import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Self-hosted fonts — eliminates all Google Fonts third-party cookie requests
import '@fontsource-variable/dm-sans'
import '@fontsource/dm-serif-display'
import '@fontsource-variable/space-grotesk'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
