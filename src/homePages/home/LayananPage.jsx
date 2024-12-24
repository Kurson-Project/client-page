import Swipers from "../../components/fragments/Swipers"
import { SwiperSlide } from "swiper/react"

export default function LayananPage() {
    const langganan = [
        {
            id: 1,
            title: "Paket 1 Bulan",
            price: "Rp. 100.000",
            desc: "One-on-One Instruction",
            desc2: "Lesson Packages",
        },
        {
            id: 2,
            title: "Paket 3 Bulan",
            price: "Rp. 300.000",
            desc: "One-on-One Instruction",
            desc2: "Lesson Packages"
        },
        {
            id: 3,
            title: "Paket 6 Bulan",
            price: "Rp. 600.000",
            desc: "One-on-One Instruction",
            desc2: "Lesson Packages"
        }
    ]

    return (
        <>
            <section className="flex justify-center align-center flex-col my-4">
                <h1 className="text-3xl font-bold text-center mb-4">Paket Langganan</h1>
                <div className="sm:flex-row flex flex-col items-center justify-center bg-gray-200 antialiased py-6">
                    {langganan.map((item) => (
                        <div className="w-[20rem] p-3" key={item.id}>
                            <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden">
                                <header className="text-center leading-tight pt-10 pb-6">
                                    <h2 className="uppercase tracking-wide text-2xl font-bold text-gray-900">{item.title}</h2>
                                    <div className="text-xl text-gray-700 font-bold tracking-tight italic">
                                        <span className="inline-block align-top pt-2">{item.price}</span>
                                    </div>
                                </header>
                                <div className="flex flex-col p-6 border-t border-gray-300 bg-gray-100">
                                    <div className="flex-1 inline-flex items-center mb-3">
                                        <div className="bg-green-300 mr-3 p-1 rounded-full">
                                            <svg className="h-3 w-3 text-green-800 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                                            </svg>
                                        </div>
                                        <p className="text-gray-700 font-bold">{item.desc}</p>
                                    </div>
                                    <div className="flex-1 inline-flex items-center mb-3">
                                        <div className="bg-green-300 mr-3 p-1 rounded-full">
                                            <svg className="h-3 w-3 text-green-800 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                                            </svg>
                                        </div>
                                        <p className="text-gray-700 font-bold">{item.desc2}</p>
                                    </div>

                                    <div className="flex-1 inline-flex items-center my-3">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto">
                                            <span className="text-white font-bold py-2 px-4 rounded">
                                                Beli Sekarang
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white flex flex-col justify-center items-center w-full pt-5">
                    <h1 className="text-3xl font-bold text-center mb-4">Daftar video</h1>
                    <Swipers>
                        <SwiperSlide>

                        </SwiperSlide>
                    </Swipers>
                </div>
            </section>
        </>
    )
}