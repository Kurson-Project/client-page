import vector10 from "@/assets/vector/vector-10.svg"
import { FadeIn } from "@/components/template/animated/FadeIn"

const HeroSectionCourse = () => {
    return (
        <section className="w-full overflow-hidden h-screen p-res-xxl flex md:flex-row flex-col md:justify-between justify-center items-center">
            <div className="absolute top-0 left-0 -z-10 w-full h-screen bg-gradient-to-b from-primary/30 via-purple-600/10 to-transparent"></div>

            <FadeIn direction="left" delay={0.8} once className="md:w-1/2 w-full md:max-w-[600px] max-w-[300px] min-w-[200px]">
                <FadeIn direction="left" className="w-fit h-fit relative">
                    <div className="absolute bg-amber-400 w-full h-full rounded-full -z-10 blur-2xl opacity-10 "></div>
                    <img src={vector10} alt="hero" className="object-contain dark:opacity-70" />
                </FadeIn>
            </FadeIn>

            <FadeIn direction="right" delay={0.8} once className="md:w-1/2 w-full md:h-full h-1/2 flex items-center">
                <FadeIn direction="right" className="w-full flex flex-col justify-center">
                    <h1 className="text-res-4xl font-bold">Kuasai lebih banyak skill dan bangun portofoliomu</h1>
                    <p className="text-res-lg">Lebih dari sekedar nonton, belajar flexibel via:</p>
                    <ul className="list-disc list-inside">
                        <li className="text-res-lg">Video materi</li>
                        <li className="text-res-lg">Bahan bacaan</li>
                        <li className="text-res-lg">Case study dan praktik</li>
                        <li className="text-res-lg">Komunitas</li>
                    </ul>
                </FadeIn>
            </FadeIn>
        </section>
    )
}

export default HeroSectionCourse