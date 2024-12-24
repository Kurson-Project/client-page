import { Routes, Route } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import DashboardPage from "../dashboard/dashboarPages/DashboardPage";
import ClassPage from "../dashboard/dashboarPages/ClassPage";

const ProtectedRoutes = () => {
    const token = localStorage.token;
    return token ? <Outlet /> : <Navigate to="/login" />
}


const DashboardRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="/dashboard/kelas" element={<ClassPage />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default DashboardRoutes