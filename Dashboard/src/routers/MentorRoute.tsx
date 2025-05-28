import { Route, Routes } from "react-router-dom"
import MentorPage from "@/pages/mentors/MentorPage"
import AppNavbar from "@/components/layout/AppNavbar"
import AppSidebar from "@/components/layout/AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"
import { pathMentorRoute } from "./PathRoute"

const MainLayout = () => {
    return (
        <SidebarProvider className="w-full">
            <AppSidebar pathRoute={pathMentorRoute}/>
            <main className="w-full h-screen rounded-lg p-2 md:pl-0 overflow-hidden flex flex-col">
                <AppNavbar />
                <div className="pt-2 flex-1 overflow-y-scroll scrollbar-none rounded-lg">
                    <Outlet />
                </div>
            </main>
        </SidebarProvider>
    )
}

const MentorRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<MentorPage/>} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  )
}

export default MentorRoute