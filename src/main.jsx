import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Themecontextprovider } from './context/Themecontext.jsx'

createRoot(document.getElementById('root')).render(
  <Themecontextprovider>
    <App />
  </Themecontextprovider>
)
