import { createContext, useContext } from "react";
import { type UserType } from "../config/AuthProvider";



export type AuthContextType = {
    user: UserType | null;
    allUsers: UserType[] | null;
    login: ({ email, password }: { email: string; password: string }) => Promise<null>;
    register: ({ username, email, password }: { username: string; email: string; password: string }) => Promise<null>;
    logout: () => Promise<null>;
    updateUser: (user: UserType) => Promise<null>;
    loading: boolean;
    error: ErrorState;
};

export type ErrorState = {
    login: string;
    register: string;
    logout: string;
    updateUser: string;
    getUser: string;
    getAllUsers: string;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}