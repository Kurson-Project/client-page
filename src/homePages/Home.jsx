import { Outlet } from 'react-router-dom'
import NavbarComponents from '../components/NavbarComponents'
import FooterComponents from '../components/FooterComponents'

export default function Home() {
    return (
        <>
            <NavbarComponents/>

            <Outlet />

            <FooterComponents/>
        </>
    )
}