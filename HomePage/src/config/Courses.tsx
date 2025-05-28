import { useEffect, useState } from "react";
import Fuse from "fuse.js";

const API_COURSES = import.meta.env.VITE_API_COURSES;

export interface CourseType {
    id?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
    price?: number;
    rating?: number;
    count?: number;
    category?: string;
    jumlah_video?: number;
    jumlah_modul?: number;
    mentor?: string;
}

export const useGetCourses = () => {
    const [data, setData] = useState<CourseType[]>([]);
    const [filteredCourses, setFilteredCourses] = useState<CourseType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    useEffect(() => {
        fetch(API_COURSES)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setFilteredCourses(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let currentData = data;

        if (category !== "All") {
            currentData = currentData.filter(
                (item) => item.category === category
            );
        }

        if (search.trim() !== "") {
            const fuse = new Fuse(currentData, {
                keys: ["title", "subtitle"],
                threshold: 0.4,
            });
            const result = fuse.search(search);
            currentData = result.map((r) => r.item);
        }

        setFilteredCourses(currentData);
    }, [search, category, data]);

    const handleSearch = (value: string) => setSearch(value);
    const handleCategory = (value: string) => setCategory(value);

    const coursePopulers = data.filter((item) => (item.rating ?? 0) > 4.7);

     const categoryName = data.map((item) => item.category).filter((value, index, self) => self.indexOf(value) === index)

    return {
        data,
        loading,
        error,
        coursePopulers,
        filteredCourses,
        handleSearch,
        handleCategory,
        categoryName
    };
};
