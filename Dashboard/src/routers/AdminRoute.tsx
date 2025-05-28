import { Route, Routes } from "react-router-dom"
import AppNavbar from "@/components/layout/AppNavbar"
import AppSidebar from "@/components/layout/AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"
import { pathAdminRoute } from "./PathRoute"
import AdminPage from "@/pages/admins/AdminPage"
import AdminChangeUsersPage from "@/pages/admins/AdminChangeUsersPage"
import AdminSettingsPage from "@/pages/admins/AdminSettingsPage"

const MainLayout = () => {
  return (
    <SidebarProvider className="w-full">
      <AppSidebar pathRoute={pathAdminRoute} />
      <main className="w-full h-screen rounded-md p-2 md:pl-0 overflow-hidden flex flex-col">
        <AppNavbar />
        <div className="pt-2 flex-1 overflow-y-scroll scrollbar-none rounded-lg">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<AdminPage />} />
        <Route path="members" element={<AdminChangeUsersPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />

        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  )
}

export default AdminRoute