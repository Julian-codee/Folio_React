import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App  }from './App.jsx'
import { MainAboutMe } from './assets/components/Layouts/Main/MainAboutMe.jsx'



createRoot(document.getElementById('root')).render(<BrowserRouter> <App /> </BrowserRouter>)
