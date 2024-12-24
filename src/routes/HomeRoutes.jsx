import { Routes, Route } from "react-router-dom";

import Home from "../homePages/Home";
import HomePage from "../homePages/home/HomePage";
import AboutPage from "../homePages/home/AboutPage";
import LayananPage from "../homePages/home/LayananPage";
import TeamPage from "../homePages/home/TeamPage";


export default function HomeRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="layanan" element={<LayananPage />} />
                    <Route path="team" element={<TeamPage />} />
                </Route>
            </Routes>
        </>
    )
}