import AppNavbar from "@/components/layout/AppNavbar"
import AppSidebar from "@/components/layout/AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { UserCoursePage, UserDetailCoursePage } from "@/pages/users/UserCoursePage"
import UsersPage from "@/pages/users/UsersPage"
import { Outlet, Route, Routes } from "react-router-dom"
import { pathUserRoute } from "./PathRoute"
import { UserYourCourseViewPage, UserYourCoursePage } from "@/pages/users/UserYourCoursePage"
import UserDiscussionPage from "@/pages/users/UserDiscussionPage"
import UserSettingsPage from "@/pages/users/UserSettingsPage"

const UsersLayout = () => {
    return (
        <SidebarProvider className="w-full">
            <AppSidebar pathRoute={pathUserRoute} />
            <main className="w-full h-screen rounded-lg p-2 md:pl-0 overflow-hidden flex flex-col">
                <AppNavbar />
                <div className="pt-2 flex-1 overflow-y-scroll scrollbar-none rounded-lg">
                    <Outlet />
                </div>
            </main>
        </SidebarProvider>
    )
}

const UsersRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<UsersLayout />}>
                <Route index element={<UsersPage />} />
                <Route path="courses" element={<UserCoursePage />} />
                <Route path="course/:id" element={<UserDetailCoursePage />} />
                <Route path="your-course" element={<UserYourCoursePage />} />
                <Route path="your-course/:id" element={<UserYourCourseViewPage />} />
                <Route path="discussions" element={<UserDiscussionPage />} />
                <Route path="settings" element={<UserSettingsPage />} />

                <Route path="*" element={<h1>404</h1>} />
            </Route>
        </Routes>
    )
}

export default UsersRoute