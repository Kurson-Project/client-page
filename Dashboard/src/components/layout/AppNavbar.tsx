import { Search } from "lucide-react"
import { ModeToggle } from "../fragments/ModeToggle"
import { SidebarTrigger } from "../ui/sidebar"
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  const { user } = useAuth();

  return (
    <div className="sticky top-0 w-full flex items-center justify-between px-4 py-1 border rounded-lg bg-background">
      <SidebarTrigger />

      <div className="flex items-center gap-2">
        <div className="w-full flex items-center gap-2 border rounded-lg p-2">
          <Search className=" text-foreground/50" size={20} />

          <input
            className="w-full outline-none h-4"
            type="text"
            placeholder="Search" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-8 h-8 shadow border">
              <AvatarImage src={user?.avatar || ""} alt={user?.username || ""} />
              <AvatarFallback>{user?.username?.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuItem>
              <Button variant={"ghost"} asChild>
                <Link to="/settings" className="flex flex-col text-left">
                  <span className="text-sm font-medium leading-none">{user?.username}</span>
                  <span className="text-xs text-muted-foreground">{user?.email}</span>
                </Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ModeToggle />
      </div>
    </div>
  )
}

export default AppNavbar