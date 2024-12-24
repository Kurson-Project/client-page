import NavbarAdmin from "./components/NavbarAdmin";
import { Outlet } from "react-router-dom";

export default function Admin() {
    return (
        <div className="flex sm:flex-row flex-col">
            <NavbarAdmin />

            <Outlet />
        </div>
    );
}