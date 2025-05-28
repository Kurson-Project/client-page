import CoursePopulers from "@/components/layout/section/CoursePopulers";
import SubscribtionSection from "@/components/layout/section/SubscribtionSection";
import { FadeIn } from "@/components/template/animated/FadeIn";
import { Button } from "@/components/ui/button";
import { useGetCourses } from "@/config/Courses"
import { BookMarked, Star, Video } from "lucide-react";
import { useParams } from "react-router-dom";

const DetailCoursePage = () => {
  const { data, loading, error } = useGetCourses();
  const id = useParams().id;
  const course = data.find((item) => item.id === id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  }

  return (
    <main className="w-full">
      <section className="w-full min-h-screen p-res-xxl flex md:flex-row flex-col items-center justify-center gap-4 overflow-hidden">
        {loading ? (
          <div className='flex items-center'>
            <div style={{ borderTopColor: '#3b82f6' }} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
            <p className="ml-2">Loading...</p>
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <FadeIn direction="left" delay={0} className="md:w-1/2 w-full rounded-lg md:pt-0 pt-6">
              <img src={course?.image} alt="hero" className="object-cover rounded-lg" />
            </FadeIn>
            <FadeIn direction="right" delay={0} className="flex flex-col md:w-1/2 w-full">
              <h1 className="text-res-4xl font-bold">{course?.title}</h1>
              <p className="text-res-lg font-semibold">{course?.subtitle}</p>
              <p className="pt-4">{course?.description}</p>
              <div className="flex flex-col pt-2">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5" />: {course?.jumlah_video}
                </div>
                <div className="flex items-center gap-2">
                  <BookMarked className="w-5 h-5" />: {course?.jumlah_modul}
                </div>
                <div className="flex items-center gap-2">
                  <Star fill="yellow" stroke="yellow" className="w-5 h-5" />: {course?.rating}/{course?.count}
                </div>
              </div>
              <Button className="mt-4 w-fit" variant="primary" size="lg">Buy Now {formatPrice(course?.price || 0)}</Button>
            </FadeIn>
          </>
        )}
      </section>

      <CoursePopulers />

      <SubscribtionSection />
    </main>
  )
}

export default DetailCoursePage