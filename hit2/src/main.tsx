import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index0.scss'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
