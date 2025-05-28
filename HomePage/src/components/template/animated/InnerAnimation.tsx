import { motion } from "framer-motion"

const InnerAnimation = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <motion.div
                initial={{ y: 0 }}
                animate={{ 
                    y: -900,
                    transition: { duration: 0.5, ease: "easeInOut", type: "tween", delay: 0.5 }
                }}
                exit={{ 
                    y: 0,
                    transition: { duration: 0.5, ease: "easeInOut", type: "tween", delay: 0.1 }
                }}
                className="w-full h-screen fixed top-0 left-0 bg-background z-50 flex items-center justify-center"
            >
                <div className="relative w-fit h-fit">
                    <h1 className="text-res-4xl font-bold text-center text-blue-500">Lumino</h1>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-2xl bg-primary rounded-full"></div>
                </div>

            </motion.div>
            <motion.div 
            initial={{ y: 0 }}
            animate={{
                y: -900,
                transition: { duration: 0.5, ease: "easeInOut", type: "tween", delay: 0.6 }
            }}
            exit={{
                y: 0,
                transition: { duration: 0.5, ease: "easeInOut", type: "tween" }
            }}
            className="w-full h-screen fixed top-0 left-0 bg-primary z-49"/>

            {children}
        </>
    )
}

export default InnerAnimation