import { Routes } from 'react-router-dom'
import GuestRoutes from './GuestRoutes'
import DashboardRoutes from './DashboardRoutes'
import MessageRoutes from './MessageRoutes'

export default function AppRoutes() {
  return (
    <Routes>
        {GuestRoutes()}
        {DashboardRoutes()}
    </Routes>
  )
}
