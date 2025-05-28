import { Link, useLocation } from "react-router-dom"
import { Button } from "../ui/button"
import { ModeToggle } from "../fragments/ModeToggel"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { AlignRight, LogOut, User } from "lucide-react"
import { useEffect, useState } from "react"
import { SearchDataInput } from "../fragments/SearchData"
import { motion, useAnimation } from "framer-motion"
import { useAuth } from "@/context/AuthContext"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        controls.start({ y: "-120%" });
      } else {
        controls.start({ y: 0 });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  return (
    <motion.nav
      animate={controls}
      initial={{ y: 0 }}
      transition={{ duration: 0.05, ease: "easeInOut", type: "spring" }}
      className={`flex fixed top-2 left-2 right-2 z-40 rounded-xl px-res-xl py-2 ${lastScrollY ? "backdrop-blur-2xl bg-background/50 border" : "bg-transparent"} transition-all duration-200`}>
      <NavInWindow />
      <NavInMobile />
    </motion.nav>
  )
}

const NavInWindow = () => {
  const { users } = useAuth();

  return (
    <div className="md:flex hidden w-full justify-between items-center">
      <div className="flex">
        <Link to="/" className="text-res-2xl font-bold">Lumino</Link>
      </div>

      <div className="flex space-x-2">
        <SearchDataInput />
        {users ? (
          <>
            <ProfileUser />
          </>
        ) : (
          <>
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="gradient" asChild>
              <Link to="/register">Register</Link>
            </Button>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}

const PathRoute = [
  { path: '/', name: 'Home' },
  { path: '/course', name: 'Course' },
  { path: '/about', name: 'About' },
  { path: '/kebijakan-privasi', name: 'Kebijakan Privasi' },
  { path: '/syarat-ketentuan', name: 'Syarat Dan Ketentuan' },
  { path: '/faq', name: 'FAQ' },
]

const NavInMobile = () => {
  const { users, logout } = useAuth();
  const location = useLocation().pathname;

  return (
    <div className="md:hidden flex w-full justify-between items-center">
      <Link to="/" className="text-res-2xl font-bold">Lumino</Link>
      <div className="flex space-x-2">
        <SearchDataInput />
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <AlignRight />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle><Link to="/" className="text-res-2xl font-bold">Lumino</Link></SheetTitle>
            </SheetHeader>
            <SheetDescription className="flex flex-col gap-2 p-2" >
              {PathRoute.map((item, index) => (
                <Button key={index} variant={item.path === location ? "secondary" : "ghost"} >
                  <Link to={item.path} className="w-full text-left">{item.name}</Link>
                </Button>
              ))}
            </SheetDescription>
            <SheetFooter>
              {users ? (
                <>
                  <Button onClick={logout}>Logout</Button>
                </>
              ) : (
                <>
                  <Button variant="outline" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button variant="gradient" asChild>
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              )}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}


const ProfileUser = () => {
  const { logout, users } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <User />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-muted-foreground">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium leading-none">{users?.username}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {users?.email}
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Button variant="destructive" onClick={logout} className="w-full cursor-pointer" size={"sm"}>
              Logout
              <LogOut className="mr-2 h-4 w-4 text-background" />
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Navbar