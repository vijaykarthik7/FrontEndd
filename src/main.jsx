import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Useref from './Useref.jsx'
import Apps from './Apps.jsx'

createRoot(document.getElementById('root')).render(
<StrictMode>
 <Apps/>
  </StrictMode>
)
