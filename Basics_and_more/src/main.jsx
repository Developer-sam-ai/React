// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hooks from './Hooks.jsx';
import Tailwind from './tailwind.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Hooks />
    <App/>
  </>,

  //! we can get every card to play diffrent data so that is handled by props
  
)
