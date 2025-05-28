import { BookMarked, BookOpen, Home, MessageCircle, Settings, Users2, type LucideIcon } from "lucide-react"

export interface PathRoute {
  path: string
  name: string
  icon: LucideIcon
}

export const pathUserRoute = [
  {
    path: '/',
    name: 'Home',
    icon: Home,
  },
  {
    path: '/courses',
    name: 'Courses',
    icon: BookMarked,
  },
  {
    path: '/your-course',
    name: 'Your Courses',
    icon: BookOpen,
  },
  {
    path: '/discussions',
    name: 'Discussions',
    icon: MessageCircle,
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: Settings,
  }
]

export const pathAdminRoute = [
  {
    path: '/',
    name: 'Home',
    icon: Home,
  },
  {
    path: '/members',
    name: 'Members',
    icon: Users2,
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: Settings,
  }
]

export const pathMentorRoute = [
  {
    path: '/',
    name: 'Home',
    icon: Home,
  },
  {
    path: '/your-courses',
    name: 'Your Courses',
    icon: BookOpen,
  },
  {
    path: '/members',
    name: 'Members',
    icon: Users2,
  },
]
