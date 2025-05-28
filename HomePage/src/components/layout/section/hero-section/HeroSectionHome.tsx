import { FadeIn } from "@/components/template/animated/FadeIn"
import { SlidingText, TypingEffect } from "@/components/template/animated/TextEffect"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import BgGlobe from "@/assets/vector/BgGlobe"
import { useTransform, motion, useScroll } from 'framer-motion'

const HeroSectionHome = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.section
      style={{
        filter: useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(20px)']),
        opacity: useTransform(scrollYProgress, [0, 1], [1, 0]),
      }}
      className="w-full sticky top-0 overflow-hidden h-screen p-res-xxl justify-between items-center">

      <div className="absolute m-auto -top-1/2 left-1/2 -z-10 w-[400px] h-[400px] bg-linear-0 from-yellow-300 to-red-600 opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute top-0 left-0 -z-30 w-full h-screen bg-gradient-to-b from-primary/40 via-purple-600/10 to-transparent"></div>
      <BgGlobe fill="currentColor" className="absolute bottom-0 left-0 -z-10 text-blue-300 opacity-15 dark:opacity-5 object-contain" />

      <motion.div
        style={{
          scale,
          opacity: useTransform(scrollYProgress, [0, 1], [1, 0]),
        }}
        className="w-full h-full flex justify-center relative">
        <FadeIn direction="down" delay={0.8} once className="flex flex-col items-center justify-center max-w-4xl h-full">
          <h1 className="text-res-4xl font-bold text-nowrap">
            WELCOME TO {" "}
            <TypingEffect texts={["LUMINO"]} className="text-blue-800 text-res-4xl font-bold" />
          </h1>
          <h2 className="text-res-2xl font-bold text-start text-nowrap mr-res-xxl pr-12">
            Platform Edukasi
            <SlidingText texts={["Inklusif", "Cepat", "Transparan"]} className="text-blue-800 font-bold text-res-2xl absolute" />
          </h2>

          <p className="text-res-lg mt-2 text-center">Lumino hadir sebagai solusi inovatif untuk pembelajaran di era digital. Menawarkan akses yang mudah ke materi yang terstruktur dengan sistem yang transparan demi menunjang pengalaman belajar terbaik. </p>
          <div className="flex space-x-2 mt-4">
            <Button variant="outline" asChild>
              <Link to="/login" className="text-res-md">Get Started</Link>
            </Button>
            <Button variant="gradient" asChild >
              <Link to="/about" className="text-res-md">Learn More</Link>
            </Button>
          </div>
        </FadeIn>
      </motion.div>
    </motion.section>
  )
}

export default HeroSectionHome