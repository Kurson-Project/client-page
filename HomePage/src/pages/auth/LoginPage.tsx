import { FloatingInput, FormTemplate } from "@/components/template/FormTemplate"
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const LoginPage = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const { login, error, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(inputData.email, inputData.password);
    } catch (error) {
      console.error("error", error);
      return
    }
  }

  return (
    <FormTemplate
      title="LOGIN"
      subtitle="Login to your account"
      btnAction={loading ? "Loading..." : "Login"}
      onSubmit={handleSubmit}
      errorText={error.login || ""}
    >
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
    </FormTemplate>
  )
}

export default LoginPage