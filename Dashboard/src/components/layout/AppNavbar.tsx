import { ModeToggle } from "../fragments/ModeToggle"
import { SidebarTrigger } from "../ui/sidebar"

const AppNavbar = () => {
  return (
    <div className="sticky top-0 w-full flex items-center justify-between px-4 py-1 border rounded-lg bg-background">
        <SidebarTrigger/>
        <ModeToggle/>
    </div>
  )
}

export default AppNavbar