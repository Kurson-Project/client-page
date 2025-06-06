import type { PathRoute } from "@/routers/PathRoute"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "../ui/sidebar"
import { Link, useLocation } from "react-router-dom"

const AppSidebar = ({ pathRoute }: { pathRoute: PathRoute[] }) => {
    const location = useLocation().pathname

    const pathMain = pathRoute?.filter((route) => route.group === "main");
    const pathOther = pathRoute?.filter((route) => route.group === "other");

    return (
        <Sidebar variant="floating" collapsible="icon">
            <SidebarHeader>
                <SidebarGroupLabel className="text-2xl font-bold text-title-gradient">Lumino</SidebarGroupLabel>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {pathMain.map((route, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton isActive={location === route.path} tooltip={route.name} size={"lg"} asChild>
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
            <SidebarFooter>
                <SidebarSeparator />
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {pathOther.map((route, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton isActive={location === route.path} tooltip={route.name} size={"lg"} asChild>
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
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar