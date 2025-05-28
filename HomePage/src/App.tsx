import { Outlet, Route, Routes, useLocation } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import { AnimatePresence } from "framer-motion"

import HomePage from "./pages/home/HomePage"
import AboutPage from "./pages/home/AboutPage"
import CoursePage from "./pages/home/CoursePage"
import DetailCoursePage from "./pages/home/DetailCoursePage"
import Navbar from "./components/layout/Navbar"
import LoginPage from "./pages/auth/LoginPage"
import RegsiterPage from "./pages/auth/RegsiterPage"
import Footer from "./components/layout/Footer"
import InnerAnimation from "./components/template/animated/InnerAnimation"
import FAQPage from "./pages/home/FAQPage"
import KebijakanPrivasi from "./pages/home/KebijakanPrivasiPage"
import SyaratKetentuanPage from "./pages/home/SyaratKetentuanPage"
import { useAuth } from "./context/AuthContext"


const MainLayout = () => {
  return (
    <InnerAnimation>
      <Navbar />
      <Outlet />
      <Footer />
    </InnerAnimation>
  )
}

const AuthLayout = () => {
  return (
    <InnerAnimation>
      <Outlet />
    </InnerAnimation>
  )
}


const App = () => {
  const location = useLocation()

  const { loading } = useAuth()

  if (loading) return (
    <div className="w-full h-screen flex items-center justify-center bg-transparent">
      <div className="relative w-fit h-fit">
        <h1 className="text-res-4xl font-bold text-center text-blue-500">Lumino</h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-2xl bg-primary rounded-full"></div>
      </div>
    </div>
  )

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="course" element={<CoursePage />} />
            <Route path="course/:id" element={<DetailCoursePage />} />
            <Route path="kebijakan-privasi" element={<KebijakanPrivasi />} />
            <Route path="syarat-ketentuan" element={<SyaratKetentuanPage />} />
            <Route path="faq" element={<FAQPage />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegsiterPage />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App