// Dev-only wrapper that warns about problems (doesn't change the UI).
import { StrictMode } from 'react'
// Connects React to a real DOM element.
import { createRoot } from 'react-dom/client'
// Global styles (colors, fonts, layout of #root, etc.).
import './index.css'
// The root component of the app.
import App from './App.jsx'

// Find <div id="root"> in index.html, let React control it, and draw <App /> inside.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
