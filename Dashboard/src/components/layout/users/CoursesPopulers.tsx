import CardCourse, { CardSkeleton } from "@/components/fragments/card/CardCourse";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useGetCourses } from "@/context/components/CoursesContext"

const CoursesPopulers = () => {
    const { coursePopulers, loading } = useGetCourses();

    return (
        <section className="w-full flex flex-col rounded-lg border p-4 bg-background">
            <h1 className="text-xl font-bold mb-4">Courses Populers</h1>
            {loading ?
                <CardSkeleton />
                :
                <Carousel>
                    <CarouselContent>
                        {coursePopulers.map((course) => (
                            <CarouselItem key={course.id} className="lg:basis-1/4 xs:basis-1/3 basis-1/2 mb-4">
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