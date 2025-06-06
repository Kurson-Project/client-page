import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { CourseType } from "@/context/components/CoursesContext";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom"


const CardCourse = ({ id, title, subtitle, image, price, rating, count, }: CourseType) => {
    const navigate = useNavigate();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    }
    return (
        <Card onClick={() => navigate(`/course/${id}`)} className="group justify-between h-full flex flex-col cursor-pointer overflow-hidden hover:translate-y-[-1px] transition-all duration-300">
            <CardHeader>
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <img src={image} alt="hero" className="rounded-lg aspect-video object-cover group-hover:scale-105 transition-all duration-300" />
                </div>
            </CardHeader>
            <CardContent className="h-full">
                <CardTitle
                    style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        overflow: 'hidden'
                    }}
                >{title}</CardTitle>
                <CardDescription
                    style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        overflow: 'hidden'
                    }}
                >{subtitle}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col items-start text-muted-foreground">
                <p className="text-res-md">{formatPrice(price || 0)}</p>
                <div className="flex items-center gap-1">
                    <Star fill="#facc15" stroke="#facc15" size={16} />
                    <p>{rating}</p>/
                    <p>({count})</p>
                </div>
            </CardFooter>
        </Card>
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