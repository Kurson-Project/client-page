import SkeletonUsersPage from '@/components/layout/skeleton/SkeletonUsersPage'
import CoursesPopulers from '@/components/layout/users/CoursesPopulers'
import SubscriptionSection from '@/components/layout/users/SubscriptionSection'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'
import { useGetCourses } from '@/context/components/CoursesContext'
import { ArrowRight } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const UserCoursePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className='gap-2 flex flex-col'>

      <section className="w-full h-auto rounded-md bg-background p-4 border">
        <h1 className="text-2xl font-bold mb-2">Your Courses</h1>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          {user?.course?.length === 0 || user?.course === undefined ?
            <div className="w-full h-full md:col-span-3 col-span-2 flex flex-col gap-2 items-center justify-center">
              <p className="text-muted-foreground">You don't have any course</p>
              <Button asChild className="w-fit">
                <Link to="/course/all">See All Courses <ArrowRight /></Link>
              </Button>
            </div>
            :
            user?.course?.map((course) => (
              <div
                onClick={() => navigate(`/your-course/${course.id}`)}
                className="group w-full h-full rounded-md bg-card flex flex-col gap-2 p-2 border hover:shadow-lg cursor-pointer"
                key={course.id}>
                <figure className="aspect-video rounded-lg overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-all duration-300" />
                </figure>
                <div className="flex flex-col">
                  <h2 className="font-bold">{course.title}</h2>
                  <p className="text-muted-foreground">{course.subtitle}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <CoursesPopulers />

      <SubscriptionSection />
    </div>
  )
}

export const UserDetailCoursePage = () => {
  const { id } = useParams();
  const { data, loading } = useGetCourses();

  const course = data.find((course) => course.id === id);

  if (loading) {
    return <SkeletonUsersPage />;
  }
  return (
    <>
      <section className='w-full h-auto flex md:flex-row flex-col gap-4'>
        <figure className='aspect-video rounded-lg overflow-hidden md:w-1/2 w-full'>
          <img src={course?.image} alt={course?.title} className='w-full h-full object-cover' />
        </figure>
        <div className='flex flex-col md:w-1/2 w-full'>
          <h1 className='text-3xl font-bold text-title-gradient'>{course?.title}</h1>
          <p className='font-bold'>{course?.subtitle}</p>
          <p className='text-muted-foreground'>{course?.description}</p>
        </div>
      </section>
    </>
  )
}

export const UserYourCourseViewPage = () => {
  const { user, loading } = useAuth();
  const { id } = useParams();

  const course = user?.course?.find((course) => course.id === id);

  if (loading) {
    return <SkeletonUsersPage />;
  }

  return (
    <>
      <section className="w-full h-auto p-2">
        <div className="w-full h-auto flex md:flex-row flex-col gap-4">
          <figure className="aspect-video rounded-lg overflow-hidden md:w-1/2 w-full">
            <img src={course?.image} alt={course?.title} className="w-full h-full object-cover" />
          </figure>
          <div className="flex flex-col md:w-1/2 w-full">
            <h1 className="text-3xl font-bold text-title-gradient">{course?.title}</h1>
            <p className="font-bold">{course?.subtitle}</p>
            <p className="text-muted-foreground">{course?.description}</p>
          </div>
        </div>
      </section>
    </>
  )
}