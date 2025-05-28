import { Navigate, Route, Routes } from "react-router-dom"
import UsersRoute from "./routers/UsersRoute"
import LoginPage from "./pages/auth/LoginPage"
import MentorRoute from "./routers/MentorRoute"
import AdminRoute from "./routers/AdminRoute"
import { useAuth } from "./context/AuthContext"

const App = () => {
  const { user, loading } = useAuth();

  console.log(user);

  if (loading) {
    return <div>Loading...</div>;
  }


  if (user?.role === "user") {
    return <UsersRoute />;
  } else if (user?.role === "mentor") {
    return <MentorRoute />;
  } else if (user?.role === "admin") {
    return <AdminRoute />;
  } else if (!user) {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
}

export default App