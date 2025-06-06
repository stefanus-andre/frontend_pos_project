import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing/Routing.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>,
)
