import { Outlet } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";

export default function Dashboard() {
    return (
        <>
            <div className="flex sm:flex-row flex-col">
                <NavbarDashboard />

                <Outlet />
            </div>
        </>
    );
}