import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// cd my-react-app
// npm run dev
// code .
// install vite: npm install -g create-vite
// to create a React application named my-react-app: npm create vite@latest my-react-app -- --template react
// createRoot(document.getElementById('root')).render(-----)  