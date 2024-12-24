import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaHouse, FaTeamspeak } from "react-icons/fa6";
import { IoIosMenu, IoIosClose } from "react-icons/io"
import { BsBookHalf } from "react-icons/bs";
import Axios from "axios";


const initialNavigation = [
    {
        icon: <FaHouse />,
        name: 'Admin',
        href: '/admin',
        current: true
    },
    {
        icon: <FaHouse />,
        name: 'Class',
        href: '/admin/kelas',
        current: false
    },
    {
        icon: <BsBookHalf />,
        name: 'Book',
        href: '/admin/book',
        current: false
    },
    {
        icon: <FaTeamspeak />,
        name: 'Team',
        href: '/admin/team',
        current: false
    },
]

export default function NavbarAdmin() {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        Axios.put('http://localhost:3001/login', {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        }).then((response) => {
            if (response.data.status == 200) {
                setUser(response.data.data)
            } else {
                navigate('/login')
            }
        })
    },[])

    function logout() {
        Axios.post('http://localhost:3001/logout', {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        }).then((response) => {
            if (response.data.status == 200) {
                localStorage.removeItem('token')
                navigate('/')
            }
        })
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const navigation = initialNavigation.map((item) => ({
        ...item,
        current: item.href === location.pathname,
    }));

    return (
        <nav className="bg-indigo-950 sticky top-0 z-50 sm:max-w-[12rem]  w-full sm:h-screen h-full">
            <div className="flex flex-col align-center h-full px-2 sm:py-4 py-2">
                <div className="flex align-center">
                    <img src="/pngwing.com.png" alt="" className="h-8 w-8" />
                    <p className="text-white text-2xl font-bold">KurSon</p>

                    <button className="ml-auto sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <IoIosClose className="text-white text-2xl" /> : <IoIosMenu className="text-white text-2xl" />}
                    </button>
                </div>

                <div className={`sm:h-full justify-between flex-col mt-4 space-y-2 sm:flex ${isOpen ? 'flex' : 'hidden'}`}>
                    <ul className='flex flex-col space-y-2'>
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={classNames(item.current ? 'bg-indigo-900' : '', 'flex align-center space-x-4 text-white hover:text-indigo-400 hover:bg-indigo-900 p-2 rounded-md')}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.icon}
                                <p className="">{item.name}</p>
                            </Link>
                        ))}

                        <div className="border-t border-indigo-700 py-2">
                            <div onClick={logout} className="flex align-center space-x-4 text-white hover:text-indigo-400 hover:bg-indigo-900 p-2 rounded-md ">
                                <FaHouse />
                                <p className="">Logout</p>
                            </div>
                            <Link to={'/'} className="flex align-center space-x-4 text-white hover:text-indigo-400 hover:bg-indigo-900 p-2 rounded-md ">
                                <FaHouse />
                                <p className="">Home</p>
                            </Link>
                        </div>

                        <div className="mt-auto align-center border-t border-indigo-900 py-2 flex">
                            <div className="w-10 h-10 bg-indigo-400 rounded-full flex justify-center align-center">
                                <p className=""></p>
                            </div>
                            <div className="ml-2">
                                <p className="text-white font-bold text-sm">{user.username}</p>
                                <p className="text-white text-xs">{user.user_email}</p>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}