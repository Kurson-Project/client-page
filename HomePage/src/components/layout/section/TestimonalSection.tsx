import { FadeIn } from "@/components/template/animated/FadeIn"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const koment = [
    {
        koment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    },
    {
        koment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    },
    {
        koment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    },
    {
        koment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    },
]

const question = [
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    },
]

const TestimonalSection = () => {
    return (
        <section className="w-full h-auto overflow-hidden p-res-xxl">
            <div className="flex flex-col w-full space-y-2">
                <FadeIn direction="left">
                    <h1 className="text-res-3xl font-bold text-title-gradient">What they say</h1>
                </FadeIn>
                <Carousel className="w-full">
                    <CarouselContent className="py-4">
                        {koment.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/4 sm:basis-1/3 basis-1/2 max-w-[300px]">
                                <FadeIn direction="down">
                                    <div className="flex flex-col p-res-md bg-accent border rounded-tr-xl rounded-bl-xl">
                                        <p>"{item.koment}"</p>
                                    </div>
                                </FadeIn>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="flex flex-col w-full space-y-4">
                <FadeIn direction="left">
                    <h1 className="text-res-3xl font-bold text-title-gradient">Frequently Asked Questions</h1>
                </FadeIn>

                <Accordion type="single" collapsible className="w-full">
                    {question.map((item, index) => (
                        <FadeIn direction="left" delay={0.2 * index} key={index}>
                            <AccordionItem value={`item-${index}`} className="border-b rounded-lg">
                                <AccordionTrigger className="text-res-md">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                            </AccordionItem>
                        </FadeIn>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default TestimonalSection