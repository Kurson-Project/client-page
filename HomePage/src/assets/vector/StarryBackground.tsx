import { useEffect, useState } from "react";

type Star = {
    id: number;
    top: string;
    left: string;
    size: string;
    animationDelay: string;
};

const generateStars = (count: number): Star[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`,
        animationDelay: `${Math.random() * 5}s`,
    }));
};

const StarryBackground = ({ className }: { className?: string }) => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        setStars(generateStars(100)); // 100 bintang
    }, []);

    return (
        <div className={`inset-0 overflow-hidden ${className}`}>
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-amber-400 opacity-80 animate-pulse"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        animationDelay: star.animationDelay,
                        animationDuration: "2s",
                    }}
                />
            ))}
        </div>
    );
};

export default StarryBackground;
