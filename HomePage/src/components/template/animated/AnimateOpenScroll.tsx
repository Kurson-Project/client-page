import dashboarLight from "@/assets/images/dashboard-light.png"
import dashboarDark from "@/assets/images/dashboard-dark.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useTheme } from "@/context/ThemeContext"

export const AnimateOpenScroll = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const rotateX = useTransform(scrollYProgress, [0, 1], [90, -90])

    const {theme} = useTheme()
    const dashboar = theme === "dark" ? dashboarDark : dashboarLight

    return (
        <div ref={ref} className="relative w-full h-full flex flex-col items-center justify-center perspective-midrange overflow-hidden p-res-xxl">
            <h1 className="text-res-4xl font-bold text-center text-title-gradient">DASHBOARD</h1>
            <motion.img src={dashboar} style={{ rotateX }} className="w-full h-full object-contain rounded-xl border shadow-[0_0_20px] shadow-primary" />
        </div>
    )
}
