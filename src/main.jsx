import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NotFound from './NotFound.jsx'
import LandingContent from './LandingContent.jsx'
import Projects from './Projects.jsx'
import TestComponent from './TestComponent.jsx'
import Res from './Res.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path:'/',
        element: <LandingContent />
      },
      {
        path:'/testcomponent',
        element: <TestComponent />
      },
      {
        path:'/resume',
        element: <Res />
      },
    
      {
        path: '/projects',
        element: <Projects />
      },
    ],
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
