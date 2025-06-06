import { Bell, BookMarked, BookOpen, CircleHelp, Home, MessageCircle, Settings, Users2, type LucideIcon } from "lucide-react"

export interface PathRoute {
  path: string
  name: string
  icon: LucideIcon
  group?: string
}

export const pathUserRoute = [
  {
    path: '/',
    name: 'Home',
    icon: Home,
    group: "main"
  },
  {
    path: '/course',
    name: 'Courses',
    icon: BookMarked,
    group: "main"
  },
  {
    path: '/discussions',
    name: 'Discussions',
    icon: MessageCircle,
    group: "main"
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Bell,
    group: "main"
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: Settings,
    group: "other"
  },
  {
    path: '/help',
    name: 'Help',
    icon: CircleHelp,
    group: "other"
  }
]

export const pathAdminRoute = [
  {
    path: '/',
    name: 'Home',
    icon: Home,
    group: "main"
  },
  {
    path: '/members',
    name: 'Members',
    icon: Users2,
    group: "main"
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: Settings,
    group: "other"
  }
]

export const pathMentorRoute = [
  {
    path: '/',
    name: 'Home',
    icon: Home,
    group: "main"
  },
  {
    path: '/your-courses',
    name: 'Your Courses',
    icon: BookOpen,
    group: "main"
  },
  {
    path: '/members',
    name: 'Members',
    icon: Users2,
    group: "main"
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: Settings,
    group: "other"
  }
]
