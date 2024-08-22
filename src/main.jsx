import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* we put the browser router here so we cna have access to it all round our app
    this browser router provides routing to application */}
    <App />
    </BrowserRouter>
  </StrictMode>,
)
