import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const initialNavigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Layanan', href: '/layanan', current: false },
    { name: 'Team', href: '/team', current: false },
]

export default function NavbarComponents() {

    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const location = useLocation();

    const navigation = initialNavigation.map((item) => ({
        ...item,
        current: item.href === location.pathname,
    }));

    return (
        <nav className="bg-indigo-950 sticky top-0 z-50 md:flex flex-col">
            <div className="flex justify-between align-center h-full px-6 py-2">
                <div className="flex align-center">
                    <img src="/pngwing.com.png" alt="" className="h-8 w-8" />
                    <p className="text-white text-2xl font-bold">KurSon</p>
                </div>

                <div className="flex align-center hidden md:block">
                    <ul className="flex align-center space-x-4">
                        {navigation.map((item) => (
                            <li key={item.name} className="flex align-center">
                                <Link
                                    to={item.href}
                                    className={classNames(
                                        item.current ? 'text-white border-b-2 border-blue-500' : 'rounded-md text-gray-300 hover:bg-blue-900 hover:text-white',
                                        'px-3 py-2 text-sm font-medium',
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="flex align-center h-full items-center">
                    <div className="flex align-center md:flex hidden">
                        <Link to="/login" className="px-4 py-2 text-white rounded-lg hover:bg-blue-800">
                            Sign In
                        </Link>
                        <Link to="/register" className="px-4 py-2 text-white rounded-lg hover:bg-blue-800">
                            Sign Up
                        </Link>
                    </div>

                    <button className="md:hidden" {...{ open }}>
                        {open ? (
                            <IoClose className="text-white text-4xl" onClick={toggleMenu} />
                        ) : (
                            <IoMenu className="text-white text-4xl" onClick={toggleMenu} />
                        )}
                    </button>
                </div>
            </div>

            <div className={`md:hidden py-4 px-6 ${open ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                        <li key={item.name} className="flex align-center">
                            <Link
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'rounded-md px-3 py-2 text-sm font-medium',
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >{item.name}</Link>
                        </li>
                    ))}
                </ul>

                <ul className="flex flex-col space-y-4 border-t border-gray-100 mt-4 pt-4">
                    <Link to="/login" className="px-3 py-2 text-white rounded-lg hover:bg-blue-800 text-sm">
                        Sign In
                    </Link>
                    <Link to="/register" className="px-3 py-2 text-white rounded-lg hover:bg-blue-800 text-sm">
                        Sign Up
                    </Link>
                </ul>
            </div>
        </nav>
    )
}