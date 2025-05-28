import { Search } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { useState } from "react"
import Fuse from "fuse.js"
import { useNavigate } from "react-router-dom"
import { useGetCourses } from "@/config/Courses"
import { Button } from "../ui/button"

// Data route
const SerachRoute = [
  { path: '/', name: 'Home' },
  { path: '/course', name: 'Course' },
  { path: '/about', name: 'About' },
  { path: '/kebijakan-privasi', name: 'Kebijakan Privasi' },
  { path: '/syarat-ketentuan', name: 'Syarat Dan Ketentuan' },
  { path: '/faq', name: 'FAQ' },
  { path: '/login', name: 'Login' },
  { path: '/register', name: 'Register' }
]


export const SearchDataInput = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
  const navigate = useNavigate()
  const { data } = useGetCourses()

  const courseData = data.map(item => ({
    title: item.title,
    path: `/course/${item.id}`
  }))

  const combinedData = [
    ...SerachRoute.map(item => ({ ...item, type: "route" })),
    ...courseData.map(item => ({
      name: item.title,
      path: item.path,
      type: "course"
    }))
  ]

  const fuse = new Fuse(combinedData, {
    keys: ['name'],
    threshold: 0.3
  })


  const searchResults = value
    ? fuse.search(value).map(result => result.item)
    : combinedData

  const groupedResults = {
    route: searchResults.filter(item => item.type === "route"),
    course: searchResults.filter(item => item.type === "course")
  }

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center rounded-full border-foreground/30 text-muted-foreground cursor-pointer"
      >
        <Search className="text-muted-foreground hover:text-foreground" size={24} />
      </div>

      {/* Dialog pencarian */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
            <div className="relative flex items-center h-10 rounded-lg border px-3">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full bg-transparent outline-none"
                placeholder="Search..."
              />
              <Search className="text-muted-foreground" />
            </div>
          </DialogHeader>

          <DialogDescription className="space-y-2 pt-2 flex flex-col max-h-[300px] overflow-y-auto">
            <span>Route</span>
            {groupedResults.route.length > 0 && (
              groupedResults.route.map((item) => (
                <Button
                  key={item.path}
                  onClick={() => {
                    setIsOpen(false)
                    navigate(item.path)
                  }}
                  variant="ghost"
                  className="justify-start w-full"
                >
                  {item.name}
                </Button>
              ))
            )}
            <span>Course</span>
            {groupedResults.course.length > 0 && (
              groupedResults.course.map((item) => (
                <Button
                  key={item.path}
                  onClick={() => {
                    setIsOpen(false)
                    navigate(item.path)
                  }}
                  variant="ghost"
                  className="justify-start w-full"
                >
                  {item.name}
                </Button>
              ))
            )}
            
            {searchResults.length === 0 && (
              <span className="text-sm text-muted-foreground">No results found.</span>
            )}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  )
}
