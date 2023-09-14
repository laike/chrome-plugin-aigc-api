import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './index.css'
import '@/assets/css/toast.css'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
