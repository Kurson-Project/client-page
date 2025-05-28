import { AlertCircle, ArrowLeft, Eye, EyeOff } from "lucide-react";
import React from "react";
import { ModeToggle } from "../fragments/ModeToggel";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

interface FormTemplateProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string;
  subtitle: string;
  btnAction: string;
  errorText?: string
}
export const FormTemplate: React.FC<FormTemplateProps> = ({ title, subtitle, children, onSubmit, btnAction, errorText }) => {
  const navigate = useNavigate();

  return (
    <main className="w-full h-screen overflow-hidden flex">
      <div className="absolute z-10 top-2 right-4">
        <ModeToggle />
      </div>
      <div className="absolute z-10 top-2 left-4">
        <Button onClick={() => navigate(-1)} variant={"outline"} >
          <ArrowLeft />
        </Button>
      </div>

      {errorText && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50">
          <Alert variant={"destructive"}>
            <AlertCircle className="w-4 h-4" />
            <AlertTitle>error</AlertTitle>
            <AlertDescription>
              {errorText}
            </AlertDescription>
          </Alert>
        </div>
      )}
      <div className="relative flex w-full h-full items-center justify-center p-res-xxl">
        <div className="absolute top-0 left-0 -z-10 w-full h-screen bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-10"></div>
        <div className="flex flex-col gap-2 w-[450px] px-res-xxl py-res-md border backdrop-blur-2xl shadow-[0_0_15px_rgba(0,0,0,0.05)] rounded-xl">
          <div className="flex flex-col max-w-[400px]">
            <h1 className="text-res-3xl font-extrabold text-center">{title}</h1>
            <p className="text-center">{subtitle}</p>
          </div>
          <form onSubmit={onSubmit} autoComplete="on" className="max-w-[400px] flex flex-col gap-4">

            {children}

            <div className="flex flex-col gap-2">
              {btnAction === "Login" && <Link to="/forgot-password" className="text-right text-muted-foreground hover:text-blue-600 hover:underline">Forgot password?</Link>}

              <div className="flex flex-col">
                <Button type="submit" className="w-full text-foreground ">{btnAction}</Button>
                <div className="flex items-center gap-4 w-full">
                  <hr className="flex-grow border-t border-muted-foreground" />
                  <span className="text-sm text-muted-foreground">or</span>
                  <hr className="flex-grow border-t border-muted-foreground" />
                </div>
                <Button variant={"outline"}>Continue with Google</Button>
              </div>

              {btnAction === "Login" && <p className="text-muted-foreground">Don&apos;t have an account? <Link className="text-blue-600 hover:underline" to={"/register"}>Register</Link></p>}
              {btnAction === "Register" && <p className="text-muted-foreground">Already have an account? <Link className="text-blue-600 hover:underline" to={"/login"}>Login</Link></p>}

            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({ label, id, type, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative flex items-center">
      <input type={showPassword ? "text" : type} id={id} {...props} className="block px-3.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label htmlFor={id} className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-3.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
        {label}
      </label>

      {type === "password" && (
        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2.5">
          {showPassword ? (
            <EyeOff className="w-5 h-5 text-gray-500" />
          ) : (
            <Eye className="w-5 h-5 text-gray-500" />
          )}
        </button>
      )}
    </div>
  );
};