import { Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import MyMedicines from "../pages/Dashboard/MyMedicines";
import Profile from "../pages/Dashboard/Profile";
import MessageRoutes from "./MessageRoutes";

export default function DashboardRoutes() {
    return (
        <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="your-medicines" element={<MyMedicines />} />
            <Route path="profile" element={<Profile />} />
            {MessageRoutes()}
        </Route>
    )
}
