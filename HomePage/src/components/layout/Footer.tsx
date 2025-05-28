import { Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import TiktokIcon from "@/assets/icon/tiktok-icon.svg"
import InstagramIcon from "@/assets/icon/instagram-icon.svg"
import YoutubeIcon from "@/assets/icon/youtube-icon.svg"

const Footer = () => {
    return (
        <footer className="w-full px-res-xxl pt-4 bg-accent relative border-t">
            <div className="w-full flex md:flex-row flex-col justify-between gap-4">
                <div className="flex flex-col gap-4 w-full">
                    <h1 className="text-res-3xl font-bold">Lumino</h1>

                    <div className="flex w-1/2 justify-between">
                        <Link to="#" className="relative">
                            <div className="absolute -top-2 -left-2 w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-full blur opacity-40"></div>
                            <img src={TiktokIcon} alt="tiktok" className="w-7 h-7" />
                        </Link>
                        <Link to="#" className="relative">
                            <div className="absolute -top-2 -left-2 w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-full blur opacity-40"></div>
                            <img src={InstagramIcon} alt="instagram" className="w-7 h-7" />
                        </Link>
                        <Link to="#" className="relative">
                            <div className="absolute -top-2 -left-2 w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-full blur opacity-40"></div>
                            <img src={YoutubeIcon} alt="youtube" className="w-8 h-8" />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <h1 className="text-res-xl font-semibold text-muted-foreground">LINKS</h1>

                    <div className="flex gap-8">
                        <div className="flex flex-col gap-2">
                            <Link to="/" className="hover:underline">Home</Link>
                            <Link to="/about" className="hover:underline">About</Link>
                            <Link to="/course" className="hover:underline">Course</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link to="/kebijakan-privasi" className="hover:underline">Kebijakan privasi</Link>
                            <Link to="/syarat-ketentuan" className="hover:underline">Layanan & ketentuan</Link>
                            <Link to="/faq" className="hover:underline">FAQ</Link>
                        </div >
                    </div >
                </div >

                <div className="flex flex-col gap-2">
                    <h1 className="text-res-xl font-semibold text-muted-foreground">KONTAK</h1>

                    <Link to="#" className="hover:underline flex items-center gap-2">
                        <Mail size={16} />
                        <span className="ml-2">xZ5b6@example.com</span>
                    </Link>
                    <Link to="#" className="hover:underline items-center flex gap-2">
                        <Phone size={16} />
                        <span className="ml-2">+628123456789</span>
                    </Link>
                </div>
            </div >

            <div className="w-full border-t border-foreground/30 py-2 mt-4">
                <p className="text-muted-foreground">Copyright &copy; 2025 Lumino. All rights reserved.</p>
            </div >
        </footer >
    )
}

export default Footer