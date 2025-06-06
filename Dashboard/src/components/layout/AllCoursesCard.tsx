import CardCourse, { CardSkeleton } from "@/components/fragments/card/CardCourse";
import { useGetCourses, type CourseType } from "@/context/components/CoursesContext";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Funnel, Search, X } from "lucide-react";

const AllCoursesCard = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [sortPopuler, setSortPopuler] = useState(false);
  const [sortedCourses, setSortedCourses] = useState<CourseType[]>([]);
  const { filteredCourses, categoryName, handleCategory, handleSearch, loading } = useGetCourses();

  // Reset handler
  const resetFilter = () => {
    setSortBy("default");
    handleCategory("All");
    setSortPopuler(false);
    handleSearch("");
  };

  useEffect(() => {
    const sorted = [...(filteredCourses || [])];
    switch (sortBy) {
      case "price-asc":
        sorted.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        break;
      case "price-desc":
        sorted.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        break;
      case "title-asc":
        sorted.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
        break;
      case "title-desc":
        sorted.sort((a, b) => (b.title || '').localeCompare(a.title || ''));
        break;
      default:
        break;
    }
    setSortedCourses(sorted);
  }, [filteredCourses, sortBy]);

  const handleSortPopuler = () => {
    const data = filteredCourses.filter((course) =>( course.rating || 0)> 0).sort((a, b) => (b.rating || 0) - (a.rating || 0));
    
    if (sortPopuler) {
      setSortedCourses(filteredCourses);
    } else {
      setSortedCourses(data);
    }
    setSortPopuler(!sortPopuler);
  };

  return (
    <section className="w-full p-4 rounded-lg border bg-background">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-xl font-bold text-nowrap">All Courses</h1>
        <div className="flex items-center gap-2">
          <div className="w-full relative">
            <Search className="absolute top-2 left-2 text-foreground/50" />
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => handleSearch(e.target.value)}
              className="max-w-[100px] sm:max-w-[200px] p-2 pl-10 rounded-lg border text-foreground"
            />
          </div>
          <Button onClick={() => setFilterOpen(!filterOpen)} variant="outline">
            <Funnel className="mr-1 w-4 h-4" /> Filter
          </Button>
        </div>
      </div>

      {filterOpen && (
        <div className="flex flex-wrap justify-around gap-2 py-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-sm">Category :</label>
            <select
              onChange={(e) => handleCategory(e.target.value)}
              className="max-w-[250px] px-2 py-1.5 rounded-lg border bg-background"
            >
              <option value="All">All</option>
              {categoryName.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="sort" className="text-sm">Sort By :</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="max-w-[250px] px-2 py-1.5 rounded-lg border bg-background"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="title-asc">Title: A-Z</option>
              <option value="title-desc">Title: Z-A</option>
            </select>
          </div>

          <div className="flex items-end">
            <Button onClick={handleSortPopuler} variant={sortPopuler ? "default" : "outline"}>
              <Funnel className="mr-1 w-4 h-4" /> Populer
            </Button>
          </div>

          <div className="flex items-end">
            <Button onClick={resetFilter} variant="destructive">
              <X className="mr-1 w-4 h-4" /> Reset Filter
            </Button>
          </div>
        </div>
      )}

      {loading ? (
        <CardSkeleton />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 xs:grid-cols-3 gap-4 mt-4">
          {sortedCourses.map((course) => (
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
      )}
    </section>
  );
};

export default AllCoursesCard;
