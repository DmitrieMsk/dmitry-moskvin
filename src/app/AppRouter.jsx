import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './Layout.jsx'
import AboutMe from '../pages/AboutMe/AboutMe.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Navigate to="/about" replace /> },
      { path: '/about', element: <AboutMe /> },
    ],
  },
], { basename: '/dmitry-moskvin' })

export default function AppRouter() {
  return <RouterProvider router={router} />
}
