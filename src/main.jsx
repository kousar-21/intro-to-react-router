import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Laptop from './components/Laptop/Laptop.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: "mobiles", Component: Mobiles},
      {path:'laptop', Component: Laptop}
    ]
  },
  {
    path: 'about',
    element: <div>this is second page</div>
  },
  {
    path: 'last',
    element: <div>React comes to an end</div>
  },
  {
    path: 'app',

    // element lekhle evhabe ditey hobe
    // element: <App></App>

    // comoponent lekhle evhabe ditey hobe
    Component: App
  },
  {
    path: '/app2',
    Component: App

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
