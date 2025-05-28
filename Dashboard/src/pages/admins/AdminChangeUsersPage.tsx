import DataTableUsers from "@/components/layout/admin/usersTable/DataTableUsers"

const AdminChangeUsersPage = () => {
  return (
    <>
        <section className="w-full h-auto rounded-md bg-background p-4 border">
            <DataTableUsers/>
        </section>
    </>
  )
}

export default AdminChangeUsersPage