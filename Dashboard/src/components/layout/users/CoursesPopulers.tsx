import CardCourse, { CardSkeleton } from "@/components/fragments/card/CardCourse";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useGetCourses } from "@/context/components/CoursesContext"
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CoursesPopulers = () => {
    const { coursePopulers, loading } = useGetCourses();

    return (
        <section className="w-full flex flex-col rounded-lg border p-4 bg-background">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold mb-2">Courses Populers</h1>
                <Button asChild variant="link">
                    <Link to="/course/all">See All <ArrowRight /></Link>
                </Button>
            </div>
            {loading ?
                <CardSkeleton />
                :
                <Carousel>
                    <CarouselContent>
                        {coursePopulers.map((course) => (
                            <CarouselItem key={course.id} className="lg:basis-1/4 xs:basis-1/3 basis-1/2 py-4">
                                <CardCourse id={course.id} title={course.title} subtitle={course.subtitle} image={course.image} price={course.price} rating={course.rating} count={course.count} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext />
                    <CarouselPrevious />
                </Carousel>
            }
        </section>
    )
}

export default CoursesPopulers