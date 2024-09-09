import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css' (getting rid of this because we're not using vite right now)
import '../index.css'
//added back the index.css so I could use it to style the whole site

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
