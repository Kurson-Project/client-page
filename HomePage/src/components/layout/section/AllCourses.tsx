import { FadeIn } from "@/components/template/animated/FadeIn"
import CardCourse, { CardSkeleton } from "@/components/template/card/CardCourse"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useGetCourses } from "@/config/Courses"

const AllCourses = () => {
    const {
        loading,
        error,
        handleSearch,
        handleCategory,
        filteredCourses,
        categoryName
    } = useGetCourses();

    return (
        <section className="w-full min-h-screen p-res-xxl overflow-hidden">
            <FadeIn direction="left">
                <h1 className="text-res-3xl font-bold py-4 text-title-gradient">All Courses</h1>
            </FadeIn>
            {loading ? (
                <CardSkeleton />
            ) : error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : (
                <>
                    <div className="flex items-center justify-between w-full space-x-4">
                        <Select onValueChange={(e) => handleCategory(e)}>
                            <SelectTrigger>
                                <p className="text-muted-foreground text-nowrap">Category :</p>
                                <SelectValue placeholder="All" />
                                <SelectContent>
                                    <SelectItem value="All">All</SelectItem>
                                    {categoryName.map((item, index) => {
                                        return (
                                            <SelectItem key={index} value={item ?? ""}>{item}</SelectItem>
                                        )
                                    })}
                                </SelectContent>
                            </SelectTrigger>
                        </Select>

                        <Input
                            type="search"
                            placeholder="Search"
                            onChange={(e) => handleSearch(e.target.value)}
                            className="max-w-xs" />
                    </div>

                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                            {filteredCourses.map((item, index) =>
                                <FadeIn direction="center" key={index}>
                                    <CardCourse
                                        id={item.id}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                        count={item.count}
                                    />
                                </FadeIn>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-40">
                            <p className="text-muted-foreground">No course found</p>
                        </div>
                    )}
                </>
            )}
        </section>
    )
}

export default AllCourses