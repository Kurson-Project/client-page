import { FadeIn } from "@/components/template/animated/FadeIn"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Eye, RocketIcon, Users } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

const items = [
    {
        title: 'Inklusif',
        description: 'Memberikan kesempatan belajar tanpa diskriminasi, memastikan setiap individu dapat mengakses ilmu pengetahuan.',
        icon: Users
    },
    {
        title: 'Cepat',
        description: 'Mempercepat proses pembelajaran melalui metode yang teruji efektif dan efisien.',
        icon: RocketIcon
    },
    {
        title: 'Transparan',
        description: 'Menghadirkan sistem dan proses yang terbuka, sehingga peserta dan mentor dapat berkomunikasi secara jelas dan lancar.',
        icon: Eye
    }
]

const CallActionSection = () => {
    const plugin = useRef(
        Autoplay(
            {
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            }
        )
    )
    return (
        <section className="min-h-screen w-full flex flex-col justify-center py-res-xxl space-y-10 overflow-hidden">
            <div className="w-full flex space-y-4 flex-col justify-center px-res-xxl">
                <FadeIn direction="left">
                    <h1 className="text-res-3xl font-bold text-title-gradient">Come join us now</h1>
                </FadeIn>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                    {items.map((item, index) => (
                        <FadeIn 
                        key={index}
                        direction="down" 
                        delay={0.2 * index} 
                        className="flex flex-col p-res-lg space-y-2 bg-accent rounded-br-3xl rounded-tl-3xl border shadow-lg">
                            <div className="flex items-center space-x-2">
                                <item.icon className="w-8 h-8" />
                                <h2 className="text-res-2xl font-bold">{item.title}</h2>
                            </div>
                            <p className="text-res-lg">{item.description}</p>
                        </FadeIn>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-center px-res-md">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                >
                    <CarouselContent>
                        <CarouselItem>
                            <div className="w-full py-res-xxl bg-primary rounded-lg">
                                <div className="w-full h-[100px]"></div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="w-full py-res-xxl bg-amber-600 rounded-lg">
                                <div className="w-full h-[100px]"></div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="w-full py-res-xxl bg-purple-700 rounded-lg">
                                <div className="w-full h-[100px]"></div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}

export default CallActionSection