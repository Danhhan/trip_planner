import { useRoutes } from 'react-router-dom'
import { AuthRoutes } from './AuthRoutes'

export function AppRoute() {
  return useRoutes([AuthRoutes])
}
