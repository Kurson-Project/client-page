
export default function HomePage() {
    return (
        <>
            <section className="flex justify-center align-center flex-col my-4 w-full p-2">
                <div className="bg-indigo-200 text-black p-2 rounded-md h-full flex flex-col justify-center align-center">
                    <div className="flex sm:flex-row flex-col-reverse justify-center align-center m-6 h-[70vh] bg-indigo-100 p-6 rounded-md">
                        <div className="sm:w-[70%] flex flex-col align-center m-auto">
                            <h1 className="sm:text-3xl text-xl font-bold">Slemat dan datang di KurSon</h1>
                            <p className="mt-2 text-justify sm:text-[1rem] text-[0.7rem]">Menyediakan edukasi dan pengembangan keterampilan yang fleksibel inovatif dan kreatif, guna menigkatkan sumber daya manusia (SDA) dan siap menghadapi tantangan era baru.</p>
                        </div>
                        <div className="w-[50%] m-auto sm:w-[30%]">
                            <img src="/pngwing.com.png" alt="" className=" object-cover"/>
                        </div>
                    </div>

                    <div className="flex justify-around align-center">
                        <div className="w-[28%] bg-indigo-100 p-2 rounded-md shadow-md shadow-gray-400">
                            <img src="/pngwing.com.png" alt="" className="m-auto w-[50%] object-cover" />
                            <p className="text-center sm:text-[1rem] text-[0.5rem]">Silahkan menikmati layanan KurSon di sini </p>
                        </div>
                        <div className="w-[28%] bg-indigo-100 p-2 rounded-md shadow-md shadow-gray-400">
                            <img src="/pngwing.com.png" alt="" className="m-auto w-[50%] object-cover" />
                            <p className="text-center sm:text-[1rem] text-[0.5rem]">Silahkan menikmati layanan KurSon di sini </p>
                        </div>
                        <div className="w-[28%] bg-indigo-100 p-2 rounded-md shadow-md shadow-gray-400">
                            <img src="/pngwing.com.png" alt="" className="m-auto w-[50%] object-cover" />
                            <p className="text-center sm:text-[1rem] text-[0.5rem]">Silahkan menikmati layanan KurSon di sini </p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}