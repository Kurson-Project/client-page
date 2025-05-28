import { ChartAdminMembers } from "@/components/template/charts/ChartAdmind"
import { BookMarked, Users2 } from "lucide-react"

const AdminPage = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <section className="w-full h-auto md:col-span-4 col-span-6 rounded-md bg-background p-4 border">
        <div className="flex flex-col justify-center w-full h-fit pb-2">
          <h1 className="text-res-2xl font-bold text-title-gradient">Selamat bergabung di Lumino</h1>
          <p className="text-muted-foreground">Nikati semua layanan kami dan bangun portfoliomu</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="w-full h-fit rounded-md bg-card p-res-sm border flex flex-col items-center justify-center gap-2">
            <div className="w-15 h-15 rounded-full bg-blue-600/10 border border-blue-600 flex items-center justify-center">
              <BookMarked />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-semibold">Courses</h2>
              <p className="text-muted-foreground text-nowrap">0 courses</p>
            </div>
          </div>
          <div className="w-full h-fit rounded-md bg-card p-res-sm border flex flex-col items-center justify-center gap-2">
            <div className="w-15 h-15 rounded-full bg-purple-600/10 border border-purple-600 flex items-center justify-center">
              <Users2 />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-semibold">Members</h2>
              <p className="text-muted-foreground text-nowrap">0 members</p>
            </div>
          </div>
          <div className="w-full h-fit rounded-md bg-card p-res-sm border flex flex-col items-center justify-center gap-2">
            <div className="w-15 h-15 rounded-full bg-yellow-600/10 border border-yellow-600 flex items-center justify-center">
              <Users2 />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-semibold">Mentors</h2>
              <p className="text-muted-foreground text-nowrap">0 mentors</p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:col-span-2 col-span-6">

      </section>

      <section className="w-full h-auto md:col-span-4 col-span-6 bg-background rounded-md p-4 border">
        <ChartAdminMembers/>
      </section>
    </div>
  )
}

export default AdminPage