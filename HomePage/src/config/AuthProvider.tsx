import { AuthContext, type UsersType } from "@/context/AuthContext"
import { useEffect, useState } from "react"

const API_USER = import.meta.env.VITE_API_USER
const API_LOGIN = import.meta.env.VITE_API_LOGIN
const API_REGISTER = import.meta.env.VITE_API_REGISTER
const API_LOGOUT = import.meta.env.VITE_API_LOGOUT

// const URL_DASHBOARD = import.meta.env.VITE_URL_DASHBOARD

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUser] = useState<UsersType | null>(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({
        user: '',
        login: '',
        register: '',
        logout: ''
    });

    useEffect(() => {
        setTimeout(() => {
            if (error.user || error.login || error.register || error.logout) {
                setError({
                    user: '',
                    login: '',
                    register: '',
                    logout: ''
                })
            }
        }, 3000)
    })

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(API_USER);
                if (!res.ok) throw new Error("Failed to fetch user");
                const data = await res.json();
                setUser(data);
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : String(err);
                setError((prev) => ({ ...prev, getUser: message }));
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const login = async (email: string, password: string) => {
        if (!email || !password) {
            setError({ ...error, login: "Email and Password is required" })
            return
        } else if (password.length < 6) {
            setError({ ...error, login: "Password must be at least 6 characters" })
            return
        }
        try {
            const response = await fetch(API_LOGIN, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_email: email,
                    user_password: password
                }),
            })
            const data = await response.json()

            if (!response.ok) {
                setError({ ...error, login: data.message })
            } else {
                setUser(data.data)
                return data
            }
        } catch (error) {
            console.error("error", error)
        }
    }

    const register = async (username: string, email: string, password: string, confirmPassword: string) => {
        if (!username || !email || !password) {
            setError({ ...error, register: "Username, Email and Password is required" })
            return
        } else if (password.length < 6) {
            setError({ ...error, register: "Password must be at least 6 characters" })
            return
        } else if (password !== confirmPassword) {
            setError({ ...error, register: "Password and Confirm Password must be the same" })
            return
        }
        try {
            const response = await fetch(API_REGISTER, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    user_email: email,
                    user_password: password
                }),
            })
            const data = await response.json()

            if (!response.ok) {
                setError({ ...error, register: data.message })
            } else {
                setUser(data.data)
                return data
            }
        } catch (error) {
            console.error("error", error)
        }
    }

    const logout = async () => {
        fetch(API_LOGOUT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(() => {
                setUser(null)
                setLoading(false)
                window.location.href = "/"
            })
            .catch((err) => {
                console.error("error", err)
            })
    }

    return (
        <AuthContext.Provider value={{
            users,
            login,
            register,
            logout,
            loading,
            error
        }}>
            {children}
        </AuthContext.Provider>
    )
}
