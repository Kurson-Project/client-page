import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"

const UserSettingsPage = () => {
    const { logout } = useAuth()
    return (
        <>
            <section className="w-full">
                <Button onClick={logout} variant={"destructive"}>Log Out</Button>
            </section>
        </>
    )
}

export default UserSettingsPage