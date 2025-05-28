import SkeletonUsersPage from "@/components/layout/skeleton/SkeletonUsersPage";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { type CourseType } from "@/context/components/CoursesContext";
import { ChevronRight, User } from "lucide-react"
import { useState } from "react";

const UserDiscussionPage = () => {
    const [courseOpen, setCourseOpen] = useState<CourseType | null>();

    const { user, loading } = useAuth();
    const courses = user?.course;

    const selectedCourse = (id: string) => {
        const course = courses?.find((course) => course.id === id);

        if (course) {
            setCourseOpen(course);
        }
    };

    if (loading) {
        return <SkeletonUsersPage />;
    }

    if (!courses || courses.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <h1 className="text-2xl font-bold">You don't have any course</h1>
            </div>
        );
    }

    return (
        <>
            <section className="w-full h-full flex gap-2">
                <div className="w-[300px] h-full flex flex-col gap-2 rounded-md bg-background border p-2 overflow-hidden">
                    <h1 className="text-2xl font-bold text-title-gradient">Discussion</h1>
                    <div className="flex flex-col h-full gap-2 overflow-y-auto scrollbar-none">
                        {courses?.map((item) => (
                            <Button
                                key={item.id}
                                onClick={() => selectedCourse(item.id as string)}
                                className="w-full flex items-center justify-between gap-2 cursor-pointer"
                                variant="outline"
                            >
                                <h1
                                    style={{
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 1,
                                        overflow: 'hidden'
                                    }}
                                >{item.title}</h1>
                                <ChevronRight />
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full h-ful overflow-hidden">
                    {courseOpen ? (
                        <>
                            <div className="w-full bg-background border p-2 rounded-md flex justify-center items-center">
                                <h1 className="font-bold">{courseOpen.title}</h1>
                            </div>
                            <div className="w-full h-full rounded-md flex flex-col gap-2 overflow-y-auto scrollbar-none">
                                {courseOpen.discussions?.map((item) => (
                                    <div key={item.id} className="w-full bg-background border p-4 rounded-md flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-12 h-12 rounded-full bg-blue-600/10 border border-blue-600 flex items-center justify-center">
                                                <User />
                                            </div>
                                            <div className="flex flex-col">
                                                <h2 className="font-bold">{item.username}</h2>
                                                <p className="text-muted-foreground">{item.role}</p>
                                            </div>
                                        </div>
                                        <p>{item.content}</p>
                                        <div className="w-full p-2 border rounded-md flex flex-col gap-2">
                                            <p className="font-bold">Comment</p>
                                            {item.comment?.map((item) => (
                                                <div key={item.id} className="w-full bg-card p-2 rounded-md flex flex-col gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-12 h-12 rounded-full bg-blue-600/10 border border-blue-600 flex items-center justify-center">
                                                            <User />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <h2 className="font-bold">{item.username}</h2>
                                                            <p className="text-muted-foreground">{item.role}</p>
                                                        </div>
                                                    </div>
                                                    <p>{item.content}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) :
                        <div className="w-full h-full flex items-center justify-center">
                            <h1 className="text-2xl font-bold">Select a course</h1>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}

export default UserDiscussionPage