import CardSubscribetion from "@/components/fragments/card/CardSubscribetion"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const items = [
    {
        title: 'Subscribtion',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod.',
        list: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod.'
        ],
        price: 1000000,
        onCklick: () => console.log('click')
    },
    {
        title: 'Subscribtion',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod.',
        list: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod.'
        ],
        price: 1000000
    }
]

const SubscriptionSection = () => {
    return (
        <section className="w-full p-4 rounded-lg bg-background border">
            <h1 className="text-xl font-bold">Subscription</h1>

            <Carousel className="mt-4">
                <CarouselContent>
                    {items.map((item, index) => (
                        <CarouselItem key={index} className="sm:basis-1/2 basis-1/1 mb-4">
                            <CardSubscribetion {...item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

export default SubscriptionSection