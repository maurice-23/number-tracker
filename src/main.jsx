import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Counters from './counters.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counters/>
  </StrictMode>,
)
