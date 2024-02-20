import React from 'react'
import {CssBaseline} from '@mui/material'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ThemeRoot} from './theme/ThemeRoot'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeRoot>
      <CssBaseline/>
      <App />
    </ThemeRoot>
  </React.StrictMode>
)
