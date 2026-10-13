import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
])

export default router