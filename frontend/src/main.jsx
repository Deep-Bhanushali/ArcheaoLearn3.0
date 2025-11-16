import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#d4af37',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              // primary: '#ff4b4b',
              primary: '#d4af37',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  </StrictMode>,
)
