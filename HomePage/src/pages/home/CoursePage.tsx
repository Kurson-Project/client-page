import AllCourses from "@/components/layout/section/AllCourses"
import CoursePopulers from "@/components/layout/section/CoursePopulers"
import HeroSectionCourse from "@/components/layout/section/hero-section/HeroSectionCourse"
import SubscribtionSection from "@/components/layout/section/SubscribtionSection"

const CoursePage = () => {
  return (
    <main className="w-full">
      <HeroSectionCourse/>

      <SubscribtionSection/>

      <CoursePopulers/>

      <AllCourses/>
    </main>
  )
}

export default CoursePage