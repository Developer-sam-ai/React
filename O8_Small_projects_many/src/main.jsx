import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RenderImg from './Components/RenderImg.jsx'

const root=createRoot(document.querySelector('#root'));

// root.render(<RenderImg/>)
root.render(<App/>)
