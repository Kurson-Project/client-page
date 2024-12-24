import { Routes, Route } from "react-router-dom";

import Admin from "../admin/Admin";
import AdminPage from "../admin/adminPage/AdminPage";
import KelasPage from "../admin/adminPage/KelasPage";

export default function AdminRoutes() {
    return (
        <Routes>
            <Route path="/admin" element={<Admin />}>
                <Route index element={<AdminPage />} />
                <Route path="/admin/kelas" element={<KelasPage />} />
            </Route>
        </Routes>
    )
}