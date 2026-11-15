import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './components/Home/home'
import About from './components/About/about'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'

const router = createBrowserRouter([
  {
    path: '/',
    elements: <Layout />,
    children:[
      {
        path: '',
        element:<Home />
      },
      {
        path: 'about',
        element:<About />
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
