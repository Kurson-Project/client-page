import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaGithub, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";


export default function FooterComponents() {
    return (
        <footer>
            <div className="bg-gray-800 py-4 text-gray-400">
                <div className="container px-4 mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-around">
                        <div className="px-4 my-4 w-full xl:w-1/5">
                            <a href="/" className="block w-56 inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                                <div className="flex align-center ">
                                    <img src="/pngwing.com.png" alt="" className="h-8 w-8" />
                                    <h2 className="text-white text-2xl font-bold">KurSon</h2>
                                </div>
                            </a>
                            <div className="flex justify-between">
                                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                                    <FaFacebook className="w-6 h-6 fill-current" />
                                </a>
                                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                                    <FaYoutube className="w-6 h-6 fill-current" />
                                </a>
                                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                                    <FaInstagram className="w-6 h-6 fill-current" />
                                </a>
                                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                                    <FaTwitter className="w-6 h-6 fill-current" />
                                </a>
                                <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400">
                                    <FaGithub className="w-6 h-6 fill-current" />
                                </a>
                            </div>
                        </div>

                        <div className="px-4 my-4 w-full sm:w-auto">
                            <div>
                                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Company</h2>
                            </div>
                            <ul className="leading-8">
                                <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
                                <li><a href="#" className="hover:text-blue-400">Terms &amp; Conditions</a></li>
                                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                            <div>
                                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Connect With Us</h2>
                            </div>
                            <div className="flex flex-col gap-2">
                                <a href="" className="hover:text-blue-400 flex items-center">
                                    <FaWhatsapp className="w-6 h-6 fill-current mr-2" />
                                    +628123456789
                                </a>
                                <a href="" className="hover:text-blue-400 flex items-center">
                                    <FaRegEnvelope className="w-6 h-6 fill-current mr-2" />
                                    2V8tI@example.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-950 py-4 text-gray-100">
                <div className="container mx-auto px-4">
                    <div className="-mx-4 flex flex-wrap justify-between">
                        <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                            Copyright © 2024 KurSon. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}