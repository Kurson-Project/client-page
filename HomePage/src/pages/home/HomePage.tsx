import CallActionSection from "@/components/layout/section/CallActionSection"
import HeroSectionHome from "../../components/layout/section/hero-section/HeroSectionHome"
import CoursePopulers from "@/components/layout/section/CoursePopulers"
import SubscribtionSection from "@/components/layout/section/SubscribtionSection"
import TestimonalSection from "@/components/layout/section/TestimonalSection"
import CategorySection from "@/components/layout/section/CategorySection"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { AnimateOpenScroll } from "@/components/template/animated/AnimateOpenScroll"
const HomePage = () => {
  return (
    <main className="w-full relative">
      <div className="absolute w-full h-[200vh]">
        <HeroSectionHome />
      </div>
      <div className="h-screen"></div>
      <div className="relative z-10 flex flex-col w-full shadow-[0_0_20px] shadow-foreground/10 overflow-hidden bg-background">
        <CallActionSection />
        <CoursePopulers />
        <div className="w-full flex items-center justify-center">
          <Button variant="primary" asChild>
            <Link to="/course" className="flex items-center gap-2">
              See All Courses <ArrowRight />
            </Link>
          </Button>
        </div>
        <CategorySection />
        <SubscribtionSection />
        <AnimateOpenScroll/>
      </div>
      <div className="relative w-full h-[120vh]">
        <div className="absolute w-full -top-[100vh] h-[220vh] bg-accent">
          <div className="h-screen sticky top-0 flex items-center justify-center">
            <TestimonalSection />
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage