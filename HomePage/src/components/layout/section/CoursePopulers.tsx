import { FadeIn } from "@/components/template/animated/FadeIn";
import CardCourse, { CardSkeleton } from "@/components/template/card/CardCourse";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useGetCourses } from "@/config/Courses"

const CoursePopulers = () => {
    const { coursePopulers, loading, error } = useGetCourses();

    return (
        <section className="w-full h-auto overflow-hidden px-res-xxl pt-res-xxl">
            <div className="flex flex-col w-full space-y-4">
                <FadeIn direction="left">
                    <h1 className="text-res-3xl font-bold text-title-gradient">Popular Courses</h1>
                </FadeIn>
                {loading ? (
                    <CardSkeleton className="mb-28"/>
                ) : error ? (
                    <p className="text-red-500">Error: {error}</p>
                ) : (
                    <Carousel className="w-full">
                        <CarouselContent>
                            {coursePopulers.map((item) => (
                                <CarouselItem key={item.id} className="md:basis-1/4 sm:basis-1/3 basis-1/2 max-h-[400px] pb-10">
                                    <FadeIn direction="down" className="w-full h-full">
                                        <CardCourse
                                            id={item.id}
                                            title={item.title}
                                            subtitle={item.subtitle}
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating}
                                            count={item.count} />
                                    </FadeIn>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute -left-4 z-10" />
                        <CarouselNext className="absolute -right-4 z-10" />
                    </Carousel>
                )}

            </div>
        </section>
    )
}

export default CoursePopulers