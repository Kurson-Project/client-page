import VectorProduksi from "/vector/ptoduksiTeknologi.png"
import VectorDigitalTeknologi from "/vector/digitalTeknologi.png"
import VectorRobotManusia from "/vector/manusia&robot.png"


export const AboutContentEra = () => {
    return (
        <>
            <div className="w-[90%] pt-6 m-auto">
                <h1 className="font-bold text-4xl text-center">Perkembangan Era</h1>
                <div className="flex justify-center align-center gap-4 bg-slate-300 rounded-xl p-2 mt-4 h-32 sm:h-40">
                    <div className="flex justify-center align-center">
                        <img src={VectorProduksi} alt="" className="object-cover m-6 sm:m-0" />
                    </div>
                    <div className="flex flex-col align-center justify-center">
                        <p className="italic text-xs sm:text-xl">1970</p>
                        <h1 className="text-base font-bold sm:text-2xl">Otomasi dan Globalisasi</h1>
                        <p className="text-xs sm:text-xl">Produksi menggunakan komputer dan elektronik</p>
                    </div>
                    <div className="flex flex-col align-center justify-center">
                        <h1 className="text-6xl sm:text-8xl font-bold">3.0</h1>
                    </div>
                </div>

                <div className="flex justify-center align-center gap-4 bg-slate-300 rounded-xl p-2 mt-4 h-40">
                    <div className="flex flex-col align-center justify-center">
                        <h1 className="text-6xl sm:text-8xl font-bold">4.0</h1>
                    </div>
                    <div className="flex flex-col align-center justify-center">
                        <p className="italic text-xs sm:text-xl text-end">era sekarang</p>
                        <h1 className="text-base font-bold sm:text-2xl text-end">Digitalisasi</h1>
                        <p className="text-xs sm:text-xl text-end">Penggunaan perangkat yang saling terhubung</p>
                    </div>
                    <div className="flex justify-center align-center">
                        <img src={VectorDigitalTeknologi} alt="" className="object-cover m-6 sm:m-0" />
                    </div>
                </div>

                <div className="flex justify-center align-center gap-4 bg-slate-300 rounded-xl p-2 mt-4 h-40">
                    <div className="flex justify-center align-center">
                        <img src={VectorRobotManusia} alt="" className="object-cover m-6 sm:m-0" />
                    </div>
                    <div className="flex flex-col align-center justify-center">
                        <p className="italic text-xs sm:text-xl">masa depan</p>
                        <h1 className="text-base font-bold sm:text-2xl">Personalisi</h1>
                        <p className="text-xs sm:text-xl">Memanusiakan manusia dengan teknologi</p>
                    </div>
                    <div className="flex flex-col align-center justify-center">
                        <h1 className="text-6xl sm:text-8xl font-bold">5.0</h1>
                    </div>
                </div>
            </div>
        </>
    )
}


export default function AboutPage() {
    return (
        <>
            <section className="flex justify-center align-center flex-col my-4">
                <AboutContentEra />

                <div className="w-[90%] mt-4 m-auto bg-slate-300 rounded-xl p-4" >
                    <h1 className="text-3xl font-bold text-center mb-4">
                        Tentang kami
                    </h1>

                    <div className="bg-white rounded-xl p-4 space-y-4">
                        <div className=" w-[80%] border-l-2 border-gray-700 p-3 flex justify-center flex-col mx-auto ">
                            <h2 className="sm:text-xl text-sm font-bold">Meningkatkan Akses Pendidikan berkualitas</h2>
                            <p className="text-justify sm:text-lg text-xs">Menyediakan konten edukasi yang terkurasi dengan baik, mudah di akses, dan relavan untuk berbagai kalangan, dari pelajar hingga profesional.  </p>
                        </div>

                        <div className=" w-[80%] border-l-2 border-gray-700 p-2 flex justify-center flex-col mx-auto ">
                            <h2 className="sm:text-xl text-sm font-bold">Meningkatkan Aksebilitas pembelajaran</h2>
                            <p className="text-justify sm:text-lg text-xs">Menciptakan platform yang dapat di akses oleh siapa saja, dimana saja dan kapan saja dengan berbagai perangkat, untuk memberikan kesempatan belajar yang merata bagi semua individu. </p>
                        </div>

                        <div className="w-[80%] border-l-2 border-gray-700 p-3 flex justify-center flex-col mx-auto ">
                            <h2 className="sm:text-xl text-sm font-bold">Mendukung Inovasi dalam Pembelajaran Digital</h2>
                            <p className="text-justify sm:text-lg text-xs">Menggunakan teknologi terkini untuk menciptkan pengalaman belajar yang interaktif dan menyenangkan, serta mendoring penggunaan metode pembelajaran yang inovatif dan adaptif terhadap penggunaan pengguna</p>
                        </div>

                        <div className="w-[80%] border-l-2 border-gray-700 p-2 flex justify-center flex-col mx-auto ">
                            <h2 className="sm:text-xl text-sm font-bold">Menjalin Kerja Sama dengan Institusi Pendidikan dan Profesional</h2>
                            <p className=" text-justify sm:text-lg text-xs">Menciptakan platform yang dapat di akses oleh siapa saja, dimana saja dan kapan saja dengan berbagai perangkat, untuk memberikan kesempatan belajar yang merata bagi semua individu. </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}