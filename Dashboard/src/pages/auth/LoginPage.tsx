import { FloatingInput, FormTemplate } from "@/components/template/FormTemplate"
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      email: inputData.email,
      password: inputData.password
    });
    navigate("/");
  }
  return (
    <FormTemplate
      title="LOGIN"
      subtitle="Login to your account"
      btnAction="Login"
      onSubmit={handleSubmit}
    >
      {error && <p className="text-red-500">{error.login}</p>}
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