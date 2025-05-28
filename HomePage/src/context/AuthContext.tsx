import { createContext, useContext } from "react";

export type UsersType = {
    username: string;
    email: string;
    password: string;
    role: string;
}

export type AuthContextType = {
    users: UsersType | null;
    login: (email: string, password: string) => Promise<void>;
    register: (username: string, email: string, password: string, confirmPassword: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
    error: {
        user: string | null;
        login: string | null;
        register: string | null;
        logout: string | null;
    };
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth must be used within a AuthProvider")
    return context
}