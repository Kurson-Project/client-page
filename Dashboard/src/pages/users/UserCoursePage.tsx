import SkeletonUsersPage from '@/components/layout/skeleton/SkeletonUsersPage'
import AllCoursesCard from '@/components/layout/users/AllCoursesCard'
import CoursesPopulers from '@/components/layout/users/CoursesPopulers'
import SubscriptionSection from '@/components/layout/users/SubscriptionSection'
import { useGetCourses } from '@/context/components/CoursesContext'
import { useParams } from 'react-router-dom'

export const UserCoursePage = () => {
  return (
    <div className='gap-2 flex flex-col'>
      <SubscriptionSection />

      <CoursesPopulers />

      <AllCoursesCard />
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