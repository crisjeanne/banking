import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import './App.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter(
  [
    {
      element: <Navbar />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/dashboard',
          element: <Dashboard/>
        },
        {
          path: '/register',
          element: <Register/>
        }
      ]
    }
  ]
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Outlet/>
    </div>
  )
}

export default App