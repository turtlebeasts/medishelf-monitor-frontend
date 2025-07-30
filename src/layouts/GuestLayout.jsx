import { Outlet } from "react-router-dom";
import GuestNavbar from "../components/Navbars/GuestNavbar";

export default function GuestLayout() {
  return (
    <div>
        <GuestNavbar />
        <Outlet />
    </div>
  )
}
