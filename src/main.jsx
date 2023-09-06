import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppLayout} from './App.jsx'
import './index.css'
import { appRoute } from './App.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={appRoute}/>
  </React.StrictMode>,
)
