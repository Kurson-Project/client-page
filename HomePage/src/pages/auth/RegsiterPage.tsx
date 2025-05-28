import { FloatingInput, FormTemplate } from "@/components/template/FormTemplate"
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const RegisterPage = () => {
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { register, error, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await register(inputData.username, inputData.email, inputData.password, inputData.confirmPassword);
    }
    catch (error) {
      console.error("error", error);
      return
    }
  }

  return (
    <FormTemplate
      title="Register"
      subtitle="Login to your account"
      btnAction={loading ? "Loading..." : "Register"}
      onSubmit={handleSubmit}
      errorText={error.register || ""}
    >
      <FloatingInput
        label="Username"
        type="text"
        id="username"
        autoComplete="username"
        onChange={(e) => setInputData({ ...inputData, username: e.target.value })} />
      <FloatingInput
        label="Email"
        type="email"
        id="email"
        autoComplete="email"
        onChange={(e) => setInputData({ ...inputData, email: e.target.value })} />
      <FloatingInput
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={(e) => setInputData({ ...inputData, password: e.target.value })} />
      <FloatingInput
        label="Confirm Password"
        type="password"
        id="confirm-password"
        autoComplete="current-password"
        onChange={(e) => setInputData({ ...inputData, confirmPassword: e.target.value })} />
    </FormTemplate>
  )
}

export default RegisterPage