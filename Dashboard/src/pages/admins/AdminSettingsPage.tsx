import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const AdminSettingsPage = () => {
    const {loading, logout} = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }
  return (
    <>
        <section>
            <Button onClick={logout} variant={"destructive"}>Log Out</Button>
        </section>
    </>
  )
}

export default AdminSettingsPage