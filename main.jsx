import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ElevenLabsProvider } from '@elevenlabs/react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ElevenLabsProvider apiKey={import.meta.env.VITE_ELEVENLABS_API_KEY || ''}>
      <App />
    </ElevenLabsProvider>
  </StrictMode>,
)
