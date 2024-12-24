import { Link } from "react-router-dom";
import Swipers from "../../components/fragments/Swipers";
import { SwiperSlide } from 'swiper/react';
import { TeamsList } from "../../components/fragments/TeamsList";

import { BsCollectionPlay } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { AboutContentEra } from "./AboutPage";

export default function HomePage() {
    return (
        <>
            <section className="h-[100vh]">
                <img src="/bacground.svg" alt="" className="w-full h-full object-cover absolute z-[-1]" />
                <div className="flex justify-between align-center sm:h-[60%] h-[70%] px-12 py-4 text-white">
                    <div className="flex flex-col-reverse justify-between align-center m-auto sm:flex-row">
                        <div className="flex flex-col m-auto">
                            <h1 className="text-3xl font-bold">
                                Welcome to KurSon
                            </h1>
                            <p>Menyediakan edukasi dan pengembangan keterampilan yang fleksibel inovatif dan kreatif, guna menigkatkan sumber daya manusia (SDA) dan siap menghadapi tantangan era baru.</p>
                            <Link to="/layanan" className="mt-6 bg-indigo-900 px-4 py-2 rounded-md w-fit text-center hover:bg-indigo-700">Get Started</Link>
                        </div>
                        <div className="w-full">
                            <img src="/pngwing.com.png" alt="" className="m-auto sm:w-[20rem] w-[50%] object-cover" />
                        </div>
                    </div>
                </div>


                <div className="flex justify-between gap-2">
                    <div className="sm:w-64 sm:h-40 w-40 h-32 m-auto text-white backdrop-blur-sm flex justify-center align-center flex-col bg-white/10 p-2 rounded-md shadow">
                        <div className="m-auto">
                            <BsCollectionPlay className="sm:text-7xl text-5xl" />
                        </div>
                        <p className="text-center sm:text-[1rem] text-[0.6rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="sm:w-64 sm:h-40 w-40 h-32 m-auto text-white backdrop-blur-sm flex justify-center align-center flex-col bg-white/10 p-2 rounded-md shadow">
                        <div className="m-auto">
                            <FaBook className="sm:text-7xl text-5xl" />
                        </div>
                        <p className="text-center sm:text-[1rem] text-[0.6rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="sm:w-64 sm:h-40 w-40 h-32 m-auto text-white backdrop-blur-sm flex justify-center align-center flex-col bg-white/10 p-2 rounded-md shadow">
                        <div className="m-auto">
                            <IoMdSchool className="sm:text-7xl text-5xl" />
                        </div>
                        <p className="text-center sm:text-[1rem] text-[0.6rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

            </section>

            <section className="flex justify-center align-center mt-20">
                <AboutContentEra />
            </section>

            <section className="py-12 flex flex-col items-center justify-center">
                <Swipers>
                    {TeamsList.map((team) => (
                        <SwiperSlide key={team.id} className="py-12">
                            <div className="w-[10rem] h-[12rem] flex flex-col justify-center align-center bg-indigo-200 p-2 rounded-md shadow p-4 m-0">
                                <img src={team.image} alt="" className="w-20 m-auto" />
                                <p className="text-center">{team.name}</p>
                                <p className="text-center">{team.content}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swipers>
            </section>
        </>
    )
}