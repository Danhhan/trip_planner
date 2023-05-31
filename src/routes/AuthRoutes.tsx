import { Navigate, Outlet } from 'react-router-dom'
import LoginPage from '@/app/pages/Auth/Login'
import RegisterPage from '@/app/pages/Auth/Register'

export const AuthRoutes = {
  path: '/',
  element: <Outlet />,
  children: [
    {
      path: '',
      element: <Outlet />,
      children: [
        {
          path: '',
          element: <Navigate to="/login" replace />
        },
        {
          path: '*',
          element: <Navigate to="/login" replace />
        },
        {
          path: 'login',
          element: <LoginPage />
        },
        {
          path: 'register',
          element: <RegisterPage />
        }
      ]
    }
  ]
}
