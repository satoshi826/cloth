import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ThemeRoot} from './theme/ThemeRoot'
import {CssBaseline} from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeRoot>
      <CssBaseline/>
      <App />
    </ThemeRoot>
  </React.StrictMode>
)
