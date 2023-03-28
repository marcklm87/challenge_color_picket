import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContainerContext, ContainerContextProvider } from './context/ContainerContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContainerContextProvider>
      <App />  
    </ContainerContextProvider>
  </React.StrictMode>,
)
