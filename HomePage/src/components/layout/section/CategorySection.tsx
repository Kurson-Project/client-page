import { FadeIn } from "@/components/template/animated/FadeIn"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { CodeXml } from "lucide-react"

const itemsCategory = [
    {
        name: 'Web Development',
        icon: <CodeXml className="w-8 h-8" />
    },
    {
        name: 'Web Development',
        icon: <CodeXml className="w-8 h-8" />
    },
    {
        name: 'Web Development',
        icon: <CodeXml className="w-8 h-8" />
    },
    {
        name: 'Web Development',
        icon: <CodeXml className="w-8 h-8" />
    },
]

const CategorySection = () => {
    return (
        <section className="w-full h-auto overflow-hidden p-res-xxl">
            <div className="flex flex-col w-full space-y-4">
                <FadeIn direction="left">
                    <h1 className="text-res-4xl font-bold text-title-gradient">Categories</h1>
                </FadeIn>
                <Carousel className="w-full">
                    <CarouselContent className="py-4">
                        {itemsCategory.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/4 sm:basis-1/3 basis-1/2 max-w-[300px]">
                                <FadeIn direction="down">
                                    <div className="flex flex-col items-center justify-center gap-2 p-res-md bg-accent border rounded-tr-xl rounded-bl-xl">
                                        {item.icon}
                                        <p>{item.name}</p>
                                    </div>
                                </FadeIn>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}

export default CategorySection