import type { PathRoute } from "@/routers/PathRoute"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "../ui/sidebar"
import { Link, useLocation } from "react-router-dom"

const AppSidebar = ({ pathRoute }: { pathRoute: PathRoute[] }) => {
    const location = useLocation().pathname

    return (
        <Sidebar variant="floating" collapsible="icon">
            <SidebarHeader>
                <SidebarGroupLabel className="text-2xl font-bold">Lumino</SidebarGroupLabel>
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Aplication</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {pathRoute?.map((route, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton isActive={location === route.path} tooltip={route.name} asChild>
                                        <Link to={route.path}>
                                            <route.icon />
                                            {route.name}
                                        </Link>

                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar