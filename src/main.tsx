import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Preview } from './preview'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Preview />
  </StrictMode>,
)
