import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/home'
import About from './components/About/about'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Contact from './components/Contact/contact'
import User from './components/User/user'
import Github, { githubInfoLoader } from './components/GitHub/github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path: 'home',
//         element:<Home />
//       },
//       {
//         path: 'contact',
//         element:<Contact />
//       },
//       {
//         path: 'about',
//         element:<About />
//       }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="home" element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path="github" element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
