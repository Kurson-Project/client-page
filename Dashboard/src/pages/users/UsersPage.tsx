import SkeletonUsersPage from "@/components/layout/skeleton/SkeletonUsersPage";
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"
import { BookOpen, Settings, UserIcon } from "lucide-react"
import { Link } from "react-router-dom";

const UsersPage = () => {
  const { user, loading } = useAuth();
  const course = user?.course;

  if (loading) {
    return <SkeletonUsersPage />;
  }
  return (
    <>
      <section className="w-full h-auto">
        <div className="grid md:grid-cols-6 grid-cols-1 w-full h-auto items-center gap-2">
          <div className="md:col-span-4 col-span-1 flex items-center h-full w-full bg-background rounded-md border p-4 gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-title-gradient">Selamat bergabung {user?.username} di Lumino</h1>
                <p>Nikati semua layanan kami dan bangun portfoliomu</p>
              </div>
              <div className="flex items-center gap-2 rounded-lg border p-2 w-fit bg-card">
                <div className="w-15 h-15 rounded-full bg-accent flex items-center justify-center">
                  <BookOpen />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold">Your Courses</h2>
                  <p className="text-muted-foreground">
                    {course?.length === undefined ?
                      0 + " Courses"
                      :
                      course?.length + " Courses"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 col-span-1 w-full h-full flex flex-col items-center justify-center gap-2 p-4 bg-background rounded-md border">
            <div className="flex items-center w-full justify-between">
              <h1 className="text-xl font-bold">Profile</h1>
              <Button variant="outline" className="gap-2">
                <Settings />
                Settings
              </Button>
            </div>
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center">
              <UserIcon size={50} />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-lg font-bold">{user?.username}</h1>
              <p className="text-muted-foreground">{user?.email}</p>
            </div>
          </div>

          <div className="md:col-span-3 col-span-1 flex flex-col justify-between p-2 gap-2">
            <h1 className="text-xl font-bold">Your Courses</h1>
            <div className="flex flex-col gap-2">
              {course?.length === undefined ?
                <div className="flex items-center justify-between rounded-md p-4 bg-background border">
                  <p className="text-muted-foreground">You don&apos;t have any course</p>
                  <Button variant={"outline"} asChild>
                    <Link to="/courses">
                      View All Courses
                    </Link>
                  </Button>
                </div>
                :
                course?.map((course, index) => (
                  <div className="flex items-center gap-2 rounded-md p-4 bg-background border" key={index}>
                    <div className="rounded py-2 px-4 font-semibold text-muted-foreground flex items-center justify-center bg-card border">
                      {course?.title?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-bold">{course.title}</h2>
                      <p
                        style={{
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 1,
                          overflow: 'hidden'
                        }}
                        className="text-muted-foreground">{course.subtitle}</p>
                    </div>

                    <Button variant={"outline"} asChild>
                      <Link to={`/users/courses/${course.id}`}>
                        View
                      </Link>
                    </Button>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UsersPage