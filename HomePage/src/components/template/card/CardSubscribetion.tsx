import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface SubscribtionProps {
    title: string;
    description: string;
    list: string[];
    price: number;
    onCklick?: () => void;
    className?: string
}

const CardSubscribetion = ({
    title,
    description,
    list,
    price,
    onCklick,
    className
}: SubscribtionProps) => {

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    }
  return (
    <div className={`max-w-[400px] shadow-lg rounded-xl p-4 border backdrop-blur-3xl backdrop-brightness-100 ${className}`}>
        <div className="flex flex-col gap-4">
            <h1 className="text-res-3xl font-bold text-center">{title}</h1>
            <p className="text-res-md">{description}</p>
            {list.map((item, index) => (
                <p key={index} className="text-res-md flex items-center"><Check stroke="green" className="inline-block mr-2" />{item}</p>
            ))}
            <p className="text-res-xl font-bold text-center">{formatPrice(price)}</p>
            <Button onClick={onCklick} variant={"primary"} className="cursor-pointer">Subscribe</Button>
        </div>
    </div>
  )
}

export default CardSubscribetion