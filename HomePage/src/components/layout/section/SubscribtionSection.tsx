import { FadeIn } from "@/components/template/animated/FadeIn"
import CardSubscribetion from "@/components/template/card/CardSubscribetion"

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

const SubscribtionSection = () => {
    return (
        <section className="relative w-full min-h-screen p-res-xxl overflow-hidden">
            <div className="absolute w-full h-screen flex sm:flex-row flex-col opacity-10">
                <div className="absolute top-20 -left-20 -z-10 w-1/2 h-2/3 bg-blue-700 blur-2xl rounded-full"></div>
                <div className="absolute top-20 right-20 -z-10 w-1/2 h-2/3 bg-purple-600 blur-2xl rounded-full"></div>
            </div>
            <FadeIn direction="left" className="text-center">
                <h1 className="text-res-4xl font-bold text-title-gradient">SUBSCRIBTION</h1>
            </FadeIn>
            <div className="w-full flex sm:flex-row flex-col items-center justify-center gap-4">
                <FadeIn direction="left" className="sm:w-1/2 w-full flex justify-center">
                    <CardSubscribetion {...items[0]} />
                </FadeIn>
                <FadeIn direction="right" className="sm:w-1/2 w-full flex justify-center">
                    <CardSubscribetion {...items[1]} />
                </FadeIn>
            </div>
        </section>
    )
}

export default SubscribtionSection