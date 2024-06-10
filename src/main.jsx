import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Owner from './components/Owner.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

const router = createBrowserRouter([
  {path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {path: '/owner',
        element: <Owner/>,
      }
    ]
  }
]
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
