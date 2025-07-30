import { Route } from 'react-router-dom'
import GuestLayout from '../layouts/GuestLayout'
import Register from '../pages/Guest/Register'
import Login from '../pages/Guest/Login'
import Home from '../pages/Guest/Home'

export default function GuestRoutes() {
    return (
        <Route path="/" element={<GuestLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>
    )
}
