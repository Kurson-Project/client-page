import { Skeleton } from "@/components/ui/skeleton"

const SkeletonUsersPage = () => {
  return (
    <div className="w-full h-full grid grid-cols-6 gap-4">
        <Skeleton className="w-full h-full md:col-span-4 col-span-6" />
        <Skeleton className="w-full h-full md:col-span-2 col-span-6" />
        <Skeleton className="w-full h-full md:col-span-3 col-span-6" />
        <Skeleton className="w-full h-full md:col-span-3 col-span-6" />
    </div>
  )
}

export default SkeletonUsersPage