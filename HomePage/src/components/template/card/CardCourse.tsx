import { Skeleton } from "@/components/ui/skeleton";
import type { CourseType } from "@/config/Courses"
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom"


const CardCourse = ({ id, title, subtitle, image, price, rating, count, }: CourseType) => {
    const navigate = useNavigate();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    }
    return (
        <div onClick={() => navigate(`/course/${id}`)} className="group flex flex-col rounded-lg p-res-xs boreder w-full h-full border cursor-pointer hover:shadow-lg transition-all duration-300">
            <figure className="w-full h-full overflow-hidden rounded-lg">
                <img src={image} alt="hero" className="rounded-lg aspect-video object-cover group-hover:scale-105 transition-all duration-300" />
            </figure>
            <div className="flex flex-col p-res-xs h-full justify-between">
                <div className="flex flex-col">
                    <h1
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                        className="font-bold">
                        {title}
                    </h1>
                    <h2
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {subtitle}
                    </h2>
                </div>
                <div className="flex flex-col">
                    <p className="italic">{price ? formatPrice(price) : "0"}</p>
                    <div className="flex space-x-2 items-center">
                        <Star className="sm:w-5 sm:h-5 w-3 h-3" fill="yellow" stroke="yellow" />
                        <p>{rating}</p>/
                        <p>{count}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const CardSkeleton = ({ className }: { className?: string }) => {
    return (
        <div className={`${className} grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4`}>
            <Skeleton className="sm:h-60 h-35" />
            <Skeleton className="sm:h-60 h-35" />
            <Skeleton className="sm:h-60 h-35 sm:block hidden" />
            <Skeleton className="sm:h-60 h-35 md:block hidden" />
        </div>
    )
}

export default CardCourse