import CardCourse, { CardSkeleton } from "@/components/fragments/card/CardCourse";
import { useGetCourses } from "@/context/components/CoursesContext";

const AllCoursesCard = () => {
  const { filteredCourses, categoryName, handleCategory, handleSearch, loading } = useGetCourses();
  return (
    <section className="w-full p-4 rounded-lg border bg-background">
      <h1 className="text-xl font-bold">All Courses</h1>
      <div className="flex items-center gap-4 mt-4">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full p-2 rounded-lg border text-foreground"
        />
        <select
          onChange={(e) => handleCategory(e.target.value)}
          className="w-full p-2 rounded-lg border bg-background"
        >
          <option value="All">All</option>
          {categoryName.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {loading ?
        <CardSkeleton />
        :
        <div className="grid grid-cols-2 lg:grid-cols-4 xs:grid-cols-3 gap-4 mt-4">
          {filteredCourses.map((course) => (
            <CardCourse
              key={course.id}
              id={course.id}
              title={course.title}
              subtitle={course.subtitle}
              image={course.image}
              price={course.price}
              rating={course.rating}
              count={course.count}
            />
          ))}
        </div>
      }
    </section>
  )
}

export default AllCoursesCard